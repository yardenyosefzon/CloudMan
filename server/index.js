const express = require("express");
const axios = require('axios')
const app = express();
const cors = require("cors");
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.post('/api/weatherData', async (req, res) => {
    try {
      const {city} = req.body
      const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=90e9aa3641dd4b31a09190503231208&q=${city}&aqi=no`);
      const data = response.data;
      console.log(data)
      res.send(data);
      
    } catch (error) {
      res.status(400).send({ error: 'Could not find any city' });
    }
  });
  

const port = process.env.PORT;
app.listen(port, () => console.log(`active on ${port}`));
