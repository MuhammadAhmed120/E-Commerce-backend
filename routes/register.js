import express from "express";
import Joi from "joi";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import UserModel from "../models/user.js";

const router = express.Router()

const registerSchema = Joi.object({
    customerName: Joi.string()
        .min(2)
        .max(30)
        .required(),
    customerEmail: Joi.string()
        .email({ tlds: { allow: false } })
        .message('Email address is invalid.')
        .required(),
    customerPassword: Joi.string()
        .min(6)
        .required()
        .pattern(/^(?=.*[a-zA-Z])(?=.*\d)/)
        .message('Password must include alphabets, and atleast one number.'),
    repeatPassword: Joi.string()
        .valid(Joi.ref('customerPassword'))
        .required(),
    customerNumber: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .message('Phone number must be exactly 10 digits.')
        .optional()
});

router.post('/', async (req, res) => {
    try {
        await registerSchema.validateAsync(req.body)
        delete req.body.repeatPassword
        const hashPassword = await bcrypt.hash(req.body.customerPassword, 10)
        const registerUser = await UserModel.create({ ...req.body, customerPassword: hashPassword }).then(res => res.toObject())
        const loginToken = jwt.sign({ customer_id: registerUser._id, customerEmail: registerUser.customerEmail }, 'store', {
            expiresIn: '15d'
        })
        delete registerUser.customerPassword
        return res.status(200).send({ status: 200, message: 'You are successfully registered, happy shopping.', user: registerUser, token: loginToken })
    } catch (error) {
        return res.status(300).send({ status: 300, message: 'An error has occured, please wait!', err: error.message })
    }
})


export default router