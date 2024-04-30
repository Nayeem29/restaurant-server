const express = require('express');
const { getAllMenu, addNewMenu } = require('../Controller/menu');
const { verifyToken, verifyAdmin } = require('../Middlewires/user');

const router = express.Router();

router.get('/',getAllMenu);
router.post('/menu',verifyToken,verifyAdmin,addNewMenu);

module.exports = router;