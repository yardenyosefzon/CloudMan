import React from 'react'

function WeatherBox({city, locationDetails, currentWeatherDetails, foundcity}) {
  
  return (
    <div className="weather-info-container">
          <div className="weather-info">
            <div className='location-container'>
              <div className='name-container'>
                <p className='name'>
                  {locationDetails.name}
                </p>
              </div>
              <div className='country-image-container'>
                <p className='country'>
                  {locationDetails.country}
                </p>
                <img className='image' src={`${currentWeatherDetails.condition.icon}`} alt="weather-icon"/>
              </div>
            </div>
            <div className='degrees-container'>
              <p className='degrees'>
                {currentWeatherDetails.temp_c+'°'}
              </p>
            </div>
            <div className='other-weather-details'>
              <div className='precipitation-container'>
                <label>Precipitation</label>
                <p className='precipitation'>
                  {currentWeatherDetails.precip_in}
                </p>
              </div>
              <div className='humidity-container'>
              <label>Humidity</label>
                <p className='humidity'>
                  {currentWeatherDetails.humidity}
                </p>
              </div>
              <div className='wind-container'>
              <label>Wind</label>
                <p>
                  {currentWeatherDetails.wind_kph}
                </p>
              </div>
              
            </div>
          </div>
          <div className="mr-cloud-container">
            <img className="mr-cloud" width={110} height={84.8} src={foundcity? '/pics/happy cloud.jpg' : '/pics/sad cloud.png'} alt="Mr-cloud"></img>
            <p className='mr-cloud-sentence'>{foundcity ? `The weather in ${locationDetails.name}` : `Did not find this one. Try again!`}</p>
          </div>

        </div>
  )
}

export default WeatherBox