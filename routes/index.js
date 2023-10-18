import express from "express";
import register from "./register.js";
import login from "./login.js";
import cloth from './cloth.js';
import checkout from './checkout.js';

const router = express.Router()

router.use('/', register)
router.use('/login', login)
router.use('/home', cloth)
router.use('/home/checkout', checkout)


export default router