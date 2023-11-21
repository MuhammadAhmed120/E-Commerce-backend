import express from "express";
import verifyToken from "../token/verifyToken.js";

const router = express.Router()

router.post('/', verifyToken, (req, res) => {
    const { decodedToken } = req;

    try {
        return res.status(200).send({ 'message': 'AUTHORIZED', decodedToken })
    } catch (error) {
        return res.status(400).send({ 'error': error.message })
    }
});

export default router