import express from "express";
import register from "./register.js";
import login from "./login.js";
import cloth from './cloth.js';
import checkout from './checkout.js';
import token from "./token.js";
import user from "./userAccount.js";
import forgotPass from "./resetPass.js";

const router = express.Router()

router.use('/', register)
router.use('/password', forgotPass)
router.use('/login', login)
router.use('/home', cloth)
router.use('/home/user', user)
router.use('/home/checkout', checkout)
router.use('/tokenverification', token)

export default router;