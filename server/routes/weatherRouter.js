const express =  require('express')
const router = express.Router()

const {getWeatherData} = require('../controllers/weatherControllers')

router.route("/").post(getWeatherData);

module.exports = router;