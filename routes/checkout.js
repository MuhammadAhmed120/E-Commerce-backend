import express from "express";
import mongoose from "mongoose";
import OrderModel from "../models/order.js";
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import Joi from "joi";
import nodemailer from 'nodemailer';
import transporter from "../mail/index.js";
import parseJwt from "../token/tokenDecode.js";

const router = express.Router()

const orderValidationSchema = Joi.object({
  orderID: Joi.string().required(),
  user_id: Joi.string().required(),
  customerName: Joi.string().required(),
  customerNumber: Joi.string().required().length(11),
  customerEmail: Joi.string().email().required(),
  customerAddress: Joi.string().required(),
  customerZIPCode: Joi.string().required().length(5),
  items: Joi.number().required(),
  amount: Joi.number().required(),
  cart: Joi.object().pattern(
    Joi.string(),
    Joi.object({
      qty: Joi.number().required(),
      name: Joi.string().required(),
      price: Joi.number().required(),
      size: Joi.string().required()
    })
  )
});

let generateOrderID = async () => {
  const randomChars = crypto.randomBytes(2).toString('hex').toUpperCase();
  const orderNumber = await OrderModel.countDocuments() + 1
  const randomID = uuidv4().substring(5, 8)
  const orderID = `${randomID}${randomChars}-${orderNumber}`;

  const existingOrderID = await OrderModel.findOne({ orderID: orderID });

  if (existingOrderID) {
    return await generateOrderID();
  }

  return orderID;
}


router.post("/", async (req, res) => {
  try {
    const orderID = await generateOrderID()

    const userToken = await parseJwt(req.headers.authorization)
    const userID = new mongoose.Types.ObjectId(userToken.customer_id)

    await orderValidationSchema.validateAsync({ orderID, user_id: userID.toString(), ...req.body });

    if (orderID && userID) {

      const cartItems = req.body.cart
      const itemList = [];
      for (const itemName in cartItems) {
        itemList.push(`${itemName}: ${cartItems[itemName]}`)
      }

      console.log('userID (1) -----> ', userID)

      const savingOrder = await OrderModel.create({ orderID, user_id: userID, ...req.body });

      return res.status(200).send({ status: 200, orderStatus: `Thank you for your order ${req.body.customerName}, your order is placed and your order ID is '${orderID}'.` });

    } else {
      return res.status(404).send({ status: 404, error: 'Something went wrong.' })
    }
  } catch (error) {
    return res.status(500).send({ status: 500, error: error.message })
  }
})


export default router

// const mailDetails = {
//   from: 'muhammadahmed120192@gmail.com',
//   to: req.body.customerEmail,
//   subject: 'Order Confirmation: Thank You for Shopping with Us!',
//   html: `
//     <html>
//     <body>
//       <div style="text-align: center;">
//         <h2>Dear ${req.body.customerName},</h2>
//       </div>
//       <p>Thank you for shopping with us at <b>FLEXUS</b>!</p>
//       <p>Your order has been confirmed, and here are the details:</p>
//       <p><strong>Order ID:</strong> ${orderID}</p>
//       <p><strong>Shipping Address:</strong> ${req.body.customerAddress}</p>
//       <p><strong>Order Summary:</strong></p>
//       <ul style="font-size: 16px;">
//         ${itemList.map(item => `<li>${item}</li>`).join('')}
//       </ul>
//       <p style="font-size: 18px;"><strong>Total Amount: ${req.body.amount}</strong></p>
//       <p>Thank you for choosing us. We'll process your order as soon as possible, and you'll receive a notification when it's shipped.</p>
//       <p>If you have any questions or need further assistance, please don't hesitate to contact our customer support.</p>
//       <p>Happy shopping!</p>
//     </body>
//     </html>
//   `,
// };

// transporter.sendMail(mailDetails, (error, info) => {
//   if (error) {
//     console.log('Error: ' + error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });


// const randomNumber = Math.floor(Math.random() * 3) + 2;
// console.log(randomNumber)
// const randomTime = moment().format('ssmmDDHHMMYYYY').slice(0, randomNumber)

// const uniqueOrderID = `${randomTime}${randomChars}-${orderNumber}`
// console.log('uniqueOrderID ---->', uniqueOrderID)