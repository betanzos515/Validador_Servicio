const express = require('express');

const router = express.Router();

router.post('/',(req, res)=>{
    console.log('Se ah enviado a acuseIMSS ');
});

module.exports = router;