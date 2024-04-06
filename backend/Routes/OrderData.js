const express = require('express');
const Order = require('../Models/Orders');
const router = express.Router();

router.post('/orderData', async (req, res) => {
    let data = req.body.order_data;
    await data.splice(0, 0, { Order_date: req.body.Order_date });

    let eId = await Order.findOne({ 'email': req.body.email });
    console.log(eId);

    if (eId === null) {
        try {
            await Order.create({
                email: req.body.email,
                order_data: [data]
            });
            res.json({ success: true });
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Server Error: " + error.message); // Fix here
        }
    } else {
        try {
            await Order.findOneAndUpdate({ email: req.body.email },
                { $push: { order_data: data } });
            res.json({ success: true });
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Server Error: " + error.message); // Fix here
        }
    }
});
router.post("/myorderdata" ,async(req ,res)=>{
    try{
        let my_data = await Order.findOne({'email':req.body.email})
        res.json({order_data:my_data})
    }
    catch(error){
        res.json({error:error})
    }
  
})
module.exports = router;
