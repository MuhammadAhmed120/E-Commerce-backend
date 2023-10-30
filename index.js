import express from 'express'
import router from './routes/index.js'
import mongoose from 'mongoose'
import databaseConnection from './db/index.js'
import chalk from 'chalk'
import cors from 'cors'

const PORT = 3001

const app = express()
app.use(express.json())
app.use(cors())

// DATABASE CONNECTION
databaseConnection('Orders')

const database = mongoose.connection;
database.on("error", console.error.bind(console, "connection error:"));
database.once("open", function () {
  console.log(chalk.bgYellowBright.grey("db connected!"));
});


app.use("/", router)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}.`)
})