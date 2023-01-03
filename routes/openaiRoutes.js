import express from 'express'
const {generateImage, askQuestion} = require('../controllers/openaiController');
const router = express.Router();

router.post('/generateimage', generateImage);

module.exports = router;