import mongoose from "mongoose";

const { Schema } = mongoose

const userSchema = new Schema({
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true, unique: true },
    customerPassword: { type: String, required: true },
    customerNumber: { type: String, required: false, unique: true },
}, {
    timestamps: true
})

const UserModel = mongoose.model('users', userSchema)

export default UserModel