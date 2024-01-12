import express from "express";
import Joi from "joi";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import mongoose from "mongoose";
import UserModel from "../models/user.js";
import 'dotenv/config'

const router = express.Router()


const loginSchema = Joi.object({
    customerEmail: Joi.string()
        .email({ tlds: { allow: false } })
        .message('Email address is invalid.')
        .required(),
    customerPassword: Joi.string()
        .required()
});

const generateToken = (userData) => {
    return jwt.sign(
        { customer_id: userData._id, customerEmail: userData.customerEmail },
        process.env.JWT_SECRET,
        { expiresIn: '15d' }
    );
};

router.post('/', async (req, res) => {
    try {
        await loginSchema.validateAsync(req.body)

        const { customerEmail } = req.body
        const loginUser = await UserModel.findOne({ customerEmail: customerEmail })

        if (loginUser !== null) {
            const comparePassword = await bcrypt.compare(req.body.customerPassword, loginUser.customerPassword);
            if (comparePassword) {
                const loginToken = jwt.sign({ customer_id: loginUser._id, customerEmail: loginUser.customerEmail }, process.env.JWT_SECRET, {
                    expiresIn: '15d'
                })
                const { customerPassword, ...userWithoutPassword } = loginUser.toObject();
                return res.status(200).send({ status: 200, message: 'You are successfully logged in, happy shopping.', user: userWithoutPassword, token: loginToken })
            }
            return res.status(401).send({ status: 401, message: 'Password you entered is incorrect.' })
        } else {
            return res.status(404).send({ status: 404, message: 'Email address is not found.' })
        }

    } catch (error) {
        return res.status(300).send({ status: 300, message: 'An error has occured, please wait!', err: error.message })
    }
})

export default router