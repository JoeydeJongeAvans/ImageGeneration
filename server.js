const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

const port = process.env.PORT || 5000;

const app = express();

// Enable body parser
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
    res.status(200).send({
      message: 'Hello from JoeyAI!'
    })
  })
  
  
app.use('/openai', require('./routes/openaiRoutes'))

app.listen(port, () => console.log('JoeyAI server started on http://localhost:5000'));

