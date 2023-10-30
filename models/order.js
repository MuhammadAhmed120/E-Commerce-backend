import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
    orderID: { type: Schema.Types.String, required: true, unique: true },
    user: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    customerName: { type: Schema.Types.String, required: true },
    customerNumber: { type: Schema.Types.String, required: true, unique: true },
    customerEmail: { type: Schema.Types.String, required: true, unique: true },
    customerAddress: { type: Schema.Types.String, required: true },
    customerZIPCode: { type: Schema.Types.String, required: true },
    items: { type: Schema.Types.Number, required: true },
    amount: { type: Schema.Types.Number, required: true },
    cart: {
        type: Map,
        of: Schema.Types.Number
    }
}, {
    timestamps: true
});


const OrderModel = mongoose.model("Orders", orderSchema);

export default OrderModel;