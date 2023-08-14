import WeatherBox from 'components/weatherBox';
import React, { useEffect, useRef, useState } from 'react';

function Home() {

  const inputRef = useRef(null)
  const [city, setCity] = useState('Tel Aviv')
  const [foundcity, setFoundCity] = useState(true)
  const [locationDetails, setLocationDetails] = useState({
    name: "",
    country: ""
  })
  const [currentWeatherDetails, setCurrentWeatherDetails]= useState({
    temp_c: "",
    precip_in: "",
    humidity: "",
    wind_kph: "",
    condition: {
      icon: ""
    }
  })

  const handleWeatherFetch = (e) => {
    if(e)
    e.preventDefault()
    fetch('http://localhost:4000/api/weatherData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ city: city }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Return the parsed JSON data
        } else {
          throw new Error(`${response.status}`);
        }
      })
      .then((data) => {
        setCurrentWeatherDetails(data.current);
        setLocationDetails(data.location);
        inputRef.current.value=""
        setFoundCity(true)
      })
      .catch(() => {
        setFoundCity(false)
        inputRef.current.value=""
      });
  };
  useEffect(() => {
    handleWeatherFetch()
  }, [])

  return (
    <div className="home-page-container">
      <div className='open-clouds-container'>
        <div className='open-cloud-1-container'>
          <img className="open-cloud-1" alt={'openCloud'} src={'/pics/open cloud.jpg'}/>
        </div> 
        <div className='open-cloud-2-container'>
          <img className="open-cloud-2" alt={'openCloud'} src={'/pics/open cloud.jpg'}/>
        </div> 
        <div className="cloudman-header-container">
          <h1 className="cloudman-header">CloudMan</h1>
        </div>
      </div>
      <div className="content-container">
        <div className="sentence-input-container">
          <div className="sentence-container">
            <p className="sentence">
              Use CloudMan to check wheather around the world
            </p>
          </div>
            <form onSubmit={handleWeatherFetch} className="form">
              <label>City</label>
              <div className='input-form-button-container'>
                <input className="input" ref={inputRef}  onChange={() => setCity(inputRef.current.value)}></input>
                <button className='form-button' type='submit'>push</button>
              </div>
            </form>
          </div>
          <WeatherBox city={city} locationDetails={locationDetails} currentWeatherDetails={currentWeatherDetails} foundcity={foundcity}/>
      </div>
    </div>
  );
}

export default Home;
