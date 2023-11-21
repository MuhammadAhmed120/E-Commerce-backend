import nodemailer from 'nodemailer'
import 'dotenv/config'

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

export default transporter