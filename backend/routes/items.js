const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Item = require("../models/Item");
const fetchuser = require('../middleware/fetchuser');

  
router.post("/addItem",fetchuser, async (req, res) => {
    try {

        const { name, type, price, quantity } = req.body;
        const newItem = new Item({
            name, type, price, quantity, user: req.user.id
        });
        const savedItem = await newItem.save();
        //console.log(savedItem);
        res.send(savedItem);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


router.get("/getItems",fetchuser,  async (req, res) => {
    try {

        const items = await Item.find({ user: req.user.id });
        res.send(items);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

router.delete("/deleteItem/:id", fetchuser, async (req, res) => {
    try {

        let item = await Item.findById(req.params.id);
        //console.log(item);
        if (!item) {
            return res.status(404).send("Not Found");
        }
        if (item.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        item = await Item.findByIdAndDelete(req.params.id);
        res.send({ "Success": "Item has been deleted", "item": item });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});



module.exports = router;