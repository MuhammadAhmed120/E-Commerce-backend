import mongoose from "mongoose";
import connectDB from "../db/db.js"

const { Schema } = mongoose;

const orderSchema = new Schema({
    orderID: { type: Schema.Types.String, required: true, unique: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'Users' },
    customerMode: { type: Schema.Types.String, required: true },
    customerName: { type: Schema.Types.String, required: true },
    customerNumber: { type: Schema.Types.String, required: true },
    customerEmail: { type: Schema.Types.String, required: true },
    customerAddress: { type: Schema.Types.String, required: true },
    customerZIPCode: { type: Schema.Types.String, required: true },
    items: { type: Schema.Types.Number, required: true },
    amount: { type: Schema.Types.Number, required: true },
    cart: {
        type: Map,
        of: {
            name: { type: Schema.Types.String, required: true },
            price: { type: Schema.Types.Number, required: true },
            sizes: [{
                size: { type: Schema.Types.String, required: true },
                qty: { type: Schema.Types.Number, required: true }
            }]
        }
    }
}, {
    timestamps: true
});

const { userDB, orderDB } = connectDB()

const OrderModel = orderDB.model("Orders", orderSchema);

// let userDB;
// let orderDB;

// (async () => {
//     const dbs = await connectDB();
//     userDB = dbs.userDB;
//     orderDB = dbs.orderDB;
// })();

// const OrderModel = orderDB.model('Orders', orderSchema);

export default OrderModel;