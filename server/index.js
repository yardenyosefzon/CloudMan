const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const weatherRouter = require("./routes/weatherRouter");

app.use(cors());
app.use(express.json());

app.use('/api/weatherData', weatherRouter );
  
const port = process.env.PORT;
app.listen(port, () => console.log(`active on ${port}`));
