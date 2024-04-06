const express = require("express");
const router = express.Router();

router.post("/displaydata" ,async (req ,res)=>{
      res.send([global.fooditems ,global.foodcategory])
})
module.exports = router;