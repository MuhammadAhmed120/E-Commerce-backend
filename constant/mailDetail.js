// const mailDetails = {
//     from: 'muhammadahmed120192@gmail.com',
//     to: req.body.customerEmail,
//     subject: 'Order Confirmation: Thank You for Shopping with Us!',
//     html: `
//       <html>
//       <body>
//         <div style="text-align: center;">
//           <h2>Dear ${req.body.customerName},</h2>
//         </div>
//         <p>Thank you for shopping with us at <b>FLEXUS</b>!</p>
//         <p>Your order has been confirmed, and here are the details:</p>
//         <p><strong>Order ID:</strong> ${orderID}</p>
//         <p><strong>Shipping Address:</strong> ${req.body.customerAddress}</p>
//         <p><strong>Order Summary:</strong></p>
//         <ul style="font-size: 16px;">
//           ${itemList.map(item => `<li>${item}</li>`).join('')}
//         </ul>
//         <p style="font-size: 18px;"><strong>Total Amount: ${req.body.amount}</strong></p>
//         <p>Thank you for choosing us. We'll process your order as soon as possible, and you'll receive a notification when it's shipped.</p>
//         <p>If you have any questions or need further assistance, please don't hesitate to contact our customer support.</p>
//         <p>Happy shopping!</p>
//       </body>
//       </html>
//     `,
// };

// export default mailDetails;