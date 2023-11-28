import express from 'express'
import clothData from "../constant/clothData.js";
import OrderModel from "../models/order.js";

const router = express.Router()


router.get('/', (req, res) => {
    try {
        return res.status(200).send({ status: 200, cloth: clothData })
    } catch (error) {
        return res.status(404).send({ status: 404, message: error.message })
    }
})

router.get('/statistics', async (req, res) => {
    try {
        const allOrders = await OrderModel.find();

        const soldCounts = {};

        allOrders.forEach((order) => {
            order.cart.forEach((item, itemName) => {
                if (soldCounts[itemName]) {
                    soldCounts[itemName] += item.qty;
                } else {
                    soldCounts[itemName] = item.qty;
                }
            });
        });

        const soldItems = Object.keys(soldCounts).map((itemName) => ({
            itemName,
            soldCount: soldCounts[itemName],
        }));

        const sortedSoldItems = soldItems.sort((a, b) => b.soldCount - a.soldCount);

        return res.status(200).send({ status: 200, sortedSoldItems })
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






// const myObj = {
        //     name: 'John',
        //     age: 30,
        //     'favorite color': 'blue'
        // };

        // Object.entries(myObj).forEach(([key, value]) => {
        //     console.log(key + ': ' + value);
        // });

        // const myObj = {
        //     name: 'John',
        //     age: 30,
        //     'favorite color': 'blue'
        // };

        // const known = 'blue'

        // Object.entries(myObj).forEach(([key, value]) => {
        //     if (value === known) {
        //         console.log(`${key}: ${value}`);  
        //     }
        // });