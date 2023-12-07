import express from "express";
import mongoose from "mongoose";
import verifyToken from "../token/verifyToken.js";
import UserModel from "../models/user.js";
import OrderModel from "../models/order.js";

const router = express.Router()

router.post("/", verifyToken, async (req, res) => {
    try {
        const { decodedToken } = req

        const userID = new mongoose.Types.ObjectId(decodedToken.customer_id)
        const userData = await UserModel.findById({ _id: userID }).select('-customerPassword')
        const userOrders = await OrderModel.find({ user_id: userID })

        if (userData && userID) {
            return res.status(200).send({ status: 200, userData, userOrders });
        } else {
            return res.status(404).send({ status: 404, error: 'User not found.' })
        }
    } catch (error) {
        return res.status(500).send({ status: 500, error: error.message })
    }
})

router.put("/", verifyToken, async (req, res) => {
    try {
        const { decodedToken, body } = req;
        const userID = new mongoose.Types.ObjectId(decodedToken.customer_id);

        const updatedUser = await UserModel.findByIdAndUpdate(
            userID,
            body,
            { new: true }
        );

        if (updatedUser) {
            return res.status(200).send({ status: 200, updatedUser, message: "Successfully updated." });
        } else {
            return res.status(404).send({ status: 404, error: 'User not found.' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ status: 500, error: error.message, message: "Internal Server Error" });
    }
});

export default router;