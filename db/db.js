import mongoose from "mongoose";
import 'dotenv/config'

const USER_URI = `mongodb+srv://ahmed:${process.env.DATABASE_PASS}@cluster0.avy1rjl.mongodb.net/Users?retryWrites=true&w=majority`
const ORDER_URI = `mongodb+srv://ahmed:${process.env.DATABASE_PASS}@cluster0.avy1rjl.mongodb.net/Orders?retryWrites=true&w=majority`

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