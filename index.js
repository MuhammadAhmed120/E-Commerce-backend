import express from 'express'
import router from './routes/index.js'
import cors from 'cors'
import mongoose from 'mongoose'
import chalk from 'chalk'
import connectDB from './db/db.js'
import 'dotenv/config'

const PORT = process.env.PORT || 3002

const { userDB, orderDB } = connectDB()

let connectionsOpened = 0;

const startServerIfReady = () => {
    connectionsOpened++;
    if (connectionsOpened === 2) {
        app.listen(PORT, () => {
            console.log(`Server running on ${PORT}.`);
        });
    }
};

// DATABASE CONNECTION
// const database = mongoose.connection;
// database.on("error", console.error.bind(console, chalk.bgRedBright.whiteBright("connection error:")));
// database.once("open", function () {
//     console.log(chalk.bgYellowBright.grey("db connected!"));
// });

userDB.on('error', console.error.bind(console, chalk.bgRedBright.whiteBright('User DB connection error:')));
userDB.once('open', function () {
    console.log(chalk.bgYellowBright.grey('User DB connected!'));
    startServerIfReady();
});

orderDB.on('error', console.error.bind(console, chalk.bgRedBright.whiteBright('Order DB connection error:')));
orderDB.once('open', function () {
    console.log(chalk.bgYellowBright.grey('Order DB connected!'));
    startServerIfReady();
});

const app = express()
app.use(express.json())
app.use(cors())

app.use("/images", express.static('images'))
app.use("/", router)

// userDB.once('open', function () {
//     console.log('Reached PORT -->', 'User DB connected!')
//     orderDB.once('open', function () {
//         console.log('Reached PORT -->', 'Order DB connected!')
//         try {
//             app.listen(PORT, () => {
//                 console.log(`Server running on ${PORT}.`);
//             });
//         } catch (error) {
//             console.error(`Error starting server: ${error}`);
//         }
//     });
// });