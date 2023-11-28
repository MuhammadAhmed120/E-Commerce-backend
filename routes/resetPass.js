import express from 'express';
import UserModel from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Joi from "joi";
import transporter from "../mail/index.js";
import 'dotenv/config'

const router = express.Router();

const forgotPasswordSchema = Joi.object({
    customerEmail: Joi.string().email().required()
});

const resetPasswordSchema = Joi.object({
    newPassword: Joi.string().min(6).required()
});

router.post('/forgot', async (req, res) => {
    const { error } = forgotPasswordSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error });
    }

    const { customerEmail } = req.body;
    const user = await UserModel.findOne({ customerEmail });

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const token = jwt.sign({ email: customerEmail }, process.env.JWT_SECRET, { expiresIn: '10m' });

    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 600000; // 10 minutes in milliseconds

    await user.save();

    const mailOptions = {
        from: 'muhammadahmed120192@gmail.com',
        to: customerEmail,
        subject: 'Reset your password',
        text: `Click on the following link to reset your password: http://localhost:3000/password/reset/${token}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: 'Failed to send reset email' });
        }
        console.log('Email sent: ' + info.response);
        res.status(200).json({ message: 'Reset email sent successfully' });
    });
});



router.post('/reset/:token', async (req, res) => {
    const { error } = resetPasswordSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error });
    }

    const { token } = req.params;
    const { newPassword } = req.body;

    const user = await UserModel.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
        return res.status(400).json({ message: 'Invalid or expired token' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.customerPassword = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.status(200).json({ message: 'Password reset successful' });
});

export default router;