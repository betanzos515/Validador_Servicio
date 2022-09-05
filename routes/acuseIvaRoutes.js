const express = require('express');

const router = express.Router();

router.post('/',(req, res)=>{
    res.json({ msg: 'Peticion a acuse iva Routes' });
});

module.exports = router;