import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
    orderID: { type: String, required: true },
    customerName: { type: String, required: true },
    customerNumber: { type: String, required: true },
    customerEmail: { type: String, required: true },
    customerAddress: { type: String, required: true },
    items: { type: Number, required: true },
    amount: { type: Number, required: true },
    cart: {
        type: Map,
        of: Number
    }
},{
    timestamps : true
});

const OrderModel = mongoose.model("Orders", orderSchema);

export default OrderModel;