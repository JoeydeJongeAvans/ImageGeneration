const express = require('express');
const {generateImage, askQuestion} = require('../controllers/openaiController');
const router = express.Router();

router.post('/generateimage', generateImage);

router.post('/', askQuestion)


module.exports = router;