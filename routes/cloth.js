import express from 'express'
import clothData from "../constant/clothData.js";

const router = express.Router()

router.get('/', (req, res) => {
    try {
        return res.status(200).send({ status: 200, cloth: clothData })
    } catch (error) {
        return res.status(404).send({ status: 404, message: error.message })
    }
})

router.get('/:category', (req, res) => {
    try {
        const { category } = req.params
        const filterCatergory = clothData.filter(cloth => cloth.category === category)
        res.status(200).send({ status: 200, cloth: filterCatergory })
    } catch (error) {
        return res.status(404).send({ status: 404, message: error.message })
    }
})

export default router