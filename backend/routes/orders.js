const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Order = require("../models/Order");
const Item = require("../models/Item");
const User = require('../models/User');

router.post("/addOrder", fetchuser, async (req, res) => {
    try {
        const { address } = req.body;
        const items = await Item.find({ user: req.user.id });
        const newOrder = new Order({
            orders: items, user: req.user.id, address, status: "pending"
        });
        await Item.remove({});

        const savedOrder = await newOrder.save();
        res.send(savedOrder);


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

});

router.get("/getOrders", fetchuser, async (req, res) => {
    try {
        //console.log(req.user.id);
        const orders = await Order.find({ user: req.user.id });
        res.send(orders);


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.get("/getAllorders", fetchuser, async (req, res) => {
    try {
        let user = await User.findById(req.user.id)
        //console.log(user);
        if (user.role != "admin") {
            return res.status(401).send("Not Allowed");
        }
        const orders = await Order.find();
        //console.log(orders)
        res.send(orders);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});



router.put("/update/:id", fetchuser, async (req, res) => {
    try {
        let user = await User.findById(req.user.id)
        //console.log(user);
        if (user.role != "admin") {
            return res.status(401).send("Not Allowed");
        }
        //console.log(req.body.status);
        const order = await Order.findOneAndUpdate({_id:req.params.id},{status:req.body.status});
        res.send(order);
        //console.log(order);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

});


module.exports = router;