import mongoose from "mongoose"
import connectDB from "../db/db.js"

const { Schema } = mongoose

const userSchema = new Schema({
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true, unique: true },
    customerPassword: { type: String, required: true },
    customerNumber: { type: String, required: true, unique: true },
    customerAddress: { type: String, required: false },
    customerPostal: { type: String, required: false },
    resetPasswordToken: String,
    resetPasswordExpires: Date
}, {
    timestamps: true
})



// const { userDB, orderDB } = connectDB()

// const UserModel = userDB.model('users', userSchema)


let userDB;
let orderDB;

(async () => {
    const dbs = await connectDB();
    userDB = dbs.userDB;
    orderDB = dbs.orderDB;
})();

const UserModel = userDB.model('users', userSchema);

export default UserModel