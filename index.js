import express from 'express'
import router from './routes/index.js'
import cors from 'cors'
import mongoose from 'mongoose'
import chalk from 'chalk'
import 'dotenv/config'

const PORT = process.env.PORT || 3002

// DATABASE CONNECTION
const database = mongoose.connection;
database.on("error", console.error.bind(console, chalk.bgRedBright.whiteBright("connection error:")));
database.once("open", function () {
    console.log(chalk.bgYellowBright.grey("db connected!"));
});

const app = express()
app.use(express.json())
app.use(cors())

app.use("/images", express.static('images'))

app.use("/", router)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}.`)
})