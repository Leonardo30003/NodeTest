const express = require('express'),
    router = express.Router()

personas = require('../models/personas')

router.use('/personas',personas);

module.exports=router;