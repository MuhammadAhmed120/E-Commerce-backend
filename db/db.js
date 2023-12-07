import mongoose from "mongoose";
import 'dotenv/config'

const USER_URI = process.env.USER_URI_DB
const ORDER_URI = process.env.ORDER_URI_DB

const connectDB = () => {
    try {
        const userDB = mongoose.createConnection(USER_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        const orderDB = mongoose.createConnection(ORDER_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        return { userDB, orderDB }
    } catch (error) {
        console.error(`Error:${error.message}`)
        process.exit(1)
    }
}

export default connectDB;