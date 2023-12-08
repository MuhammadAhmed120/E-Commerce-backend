import express from "express";
import mongoose from "mongoose";
import OrderModel from "../models/order.js";
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import Joi from "joi";
import transporter from "../mail/index.js";
import parseJwt from "../token/tokenDecode.js";
import verifyToken from "../token/verifyToken.js";

const router = express.Router()

const orderValidationSchema = Joi.object({
  orderID: Joi.string().required(),
  user_id: Joi.string(),
  customerMode: Joi.string().required(),
  customerName: Joi.string().required(),
  customerNumber: Joi.string()
    .pattern(/^[0-9]{11}$/)
    .message('Phone number must be exactly 11 digits.')
    .required(),
  customerEmail: Joi.string().email().required(),
  customerAddress: Joi.string().required(),
  customerZIPCode: Joi.string().required().length(5),
  items: Joi.number().required(),
  amount: Joi.number().required(),
  cart: Joi.object().pattern(
    Joi.string(),
    Joi.object({
      name: Joi.string().required(),
      price: Joi.number().required(),
      sizes: Joi.array().items(
        Joi.object({
          size: Joi.string().required(),
          qty: Joi.number().required()
        })
      ).required()
    })
  )
});

let generateOrderID = async () => {
  const randomChars = crypto.randomBytes(2).toString('hex').toUpperCase();
  const orderNumber = await OrderModel.countDocuments() + 1
  const randomID = uuidv4().substring(5, 8)
  const orderID = `${randomID}${randomChars}-${orderNumber}`;

  const existingOrderID = await OrderModel.findOne({ orderID });

  if (existingOrderID) {
    return await generateOrderID();
  }

  return orderID;
}


router.post("/", verifyToken, async (req, res) => {
  try {
    const orderID = await generateOrderID()

    const { customerMode } = req

    await orderValidationSchema.validateAsync({ orderID, customerMode, ...req.body });

    if (orderID) {
      const orderItems = [];

      for (const clothID in req.body.cart) {
        if (Object.prototype.hasOwnProperty.call(req.body.cart, clothID)) {
          const item = req.body.cart[clothID];
          const { name, price, sizes } = item;
          sizes.forEach(sizeItem => {
            orderItems.push({
              name,
              quantity: sizeItem.qty,
              price,
              size: sizeItem.size,
              clothID // Adding clothID for reference
            });
          });
        }
      }


      const orderItemsList = orderItems.map(item => `
  <li>
    <strong>Item:</strong> ${item.name}<br>
    <strong>Price:</strong> ${item.price}<br>
    <strong>Quantity:</strong> ${item.quantity}<br>
    <strong>Size:</strong> ${item.size}<br>
    <strong>Cloth ID:</strong> ${item.clothID}
  </li>
`).join('');

      const mailDetails = {
        from: 'muhammadahmed120192@gmail.com',
        to: req.body.customerEmail,
        subject: 'Order Confirmation: Thank You for Shopping with Us!',
        html: `
          <html>
          <body>
            <div style="text-align: center;">
              <h2>Dear ${req.body.customerName},</h2>
            </div>
            <p>Thank you for shopping with us at <b>FLEXUS</b>!</p>
            <p>Your order has been confirmed, and here are the details:</p>
            <p><strong>Order ID:</strong> ${orderID}</p>
            <p><strong>Shipping Address:</strong> ${req.body.customerAddress}</p>
            <p><strong>Order Summary:</strong></p>
            <ul style="font-size: 16px;">
              ${orderItemsList}
            </ul>
            <p style="font-size: 18px;"><strong>Total Amount: ${req.body.amount}</strong></p>
            <p>Thank you for choosing us. We'll process your order as soon as possible, and you'll receive a notification when it's shipped.</p>
            <p>If you have any questions or need further assistance, please don't hesitate to contact our customer support.</p>
            <p>Happy shopping!</p>
          </body>
          </html>
        `,
      };

      transporter.sendMail(mailDetails, (error, info) => {
        if (error) {
          console.log('Error: ' + error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      const orderDetails = {
        customerName: req.body.customerName,
        items: orderItems,
        orderID,
        status: 'Order Confirmed',
        message: `Thank you, <strong>${req.body.customerName}</strong>! Your order (${orderID}) has been placed successfully.`,
        timestamp: new Date().toISOString(),
      };

      if (customerMode === 'user') {
        const userToken = await parseJwt(req.headers.authorization)
        const userID = userToken && new mongoose.Types.ObjectId(userToken.customer_id)

        const savingOrder = await OrderModel.create({ orderID, customerMode, user_id: userID, ...req.body });

        if (savingOrder) {
          return res.status(200).send({ status: 200, orderDetails, savingOrder });
        }
      }
      else if (customerMode === 'guest') {
        const savingOrder = await OrderModel.create({ orderID, customerMode, ...req.body });

        if (savingOrder) {
          return res.status(200).send({ status: 200, orderDetails, savingOrder });
        }
      }
      else {
        return res.status(404).send({ status: 404, error: 'Something went wrong.' })
      }
    }
    else {
      return res.status(404).send({ status: 404, error: 'Order ID didnot generate.' })
    }
  } catch (error) {
    return res.status(500).send({ status: 500, error: error.message })
  }
})

export default router;

// const randomNumber = Math.floor(Math.random() * 3) + 2;
// console.log(randomNumber)
// const randomTime = moment().format('ssmmDDHHMMYYYY').slice(0, randomNumber)

// const uniqueOrderID = `${randomTime}${randomChars}-${orderNumber}`
// console.log('uniqueOrderID ---->', uniqueOrderID)