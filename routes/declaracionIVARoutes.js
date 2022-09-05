const express = require('express');

const router = express.Router();

router.post('/',(req,res)=>{
    res.json({ msg:'paticion a declaracionIVA' })
});

module.exports = router
