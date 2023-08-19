import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Weather = () => {

    const apiKey = "f56f24967aaf51182d1d4df628297c6d"
    const [inputCity, setInputCity] = useState("")
    const [data, setData] = useState({})
  
  
    const getWetherDetails = (cityName) => {
      if (!cityName) return
      const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
      axios.get(apiURL).then((res) => {
        console.log("response", res.data)
        setData(res.data)
      }).catch((err) => {
        console.log("err", err)
      })
    }
    const handlesearch = ()=>{
    //  alert ("clicked")
    getWetherDetails(inputCity)

    }
    const handleinput = (e)=>{
        // console.log("value",e.target.value);
        setInputCity(e.target.value)
    }
    useEffect(()=>{
        getWetherDetails("Hyderabad")
    },[])
  
  return (
    <div className="col-md-12">
      <div className="weatherbg">
        <h1>WEATHER APP</h1>

        <div className="d-grid gap-3 col-4 mt-4">
          <input onChange={handleinput} value={inputCity} type="text" className="form-control" />
          <button onClick={handlesearch} className="btn btn-success" type="button">
            Search
          </button>
        </div>
      </div>
    <div className='col-md-12 text-center  mt-5'>
        <div className='shadow rounded  WeatherresultBox'>
        <img className='weather-icon' src="https://www.transparentpng.com/thumb/weather/png-photo-weather-hd-9.png" alt=""/>


        <h5 className="weathercity">{data?.name}</h5>
        <h6 className="weathertemp"> {((data?.main?.temp) -273.15).toFixed(2)}°C</h6>
        </div>
        
    </div>
    

    </div>
  )
}

export default Weather
