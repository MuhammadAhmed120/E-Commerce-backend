import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'muhammadahmed120192@gmail.com',
        pass: 'hirt uosm gcvz ichf'
    }
});

export default transporter