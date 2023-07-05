import React, { useEffect, useState } from 'react'
import coldImage from "../assets/pexels-photo-4612394.webp"
import Description from './Description'
import { getWeatherData } from './WeatherData';
import Forcast from './Forcast';
//https://openweathermap.org/img/wn/02d@2x.png



const Home = () => {

  const[weather,setWeather]=useState(null)
  

  const[unit,setUnit]=useState('metric')

  const[city,setCity]=useState('london')

  useEffect(()=>{

    const fetchWeatherData= async()=>{

      const data=await getWeatherData(city,unit)
     
      setWeather(data)
    }

    fetchWeatherData()
   

  },[unit,city])


  const handleUnitclick=(e)=>{
       const button=e.currentTarget;
       const isCelcius= button.innerText.slice(1)==="C";
       button.innerText=isCelcius ?"ºF":"ºC";
       setUnit(isCelcius?'metric':"imperial")

  }




  const enterkeyPress=(e)=>{
    if(e.keyCode === 13){
      setCity(e.currentTarget.value)
    }

  }



  
  



  return (
     <div className='homewrap' style={{background:`url(${coldImage})`}}>
     
       <div className='overlay'>

      
       {

         weather && <div className='container'>

         <div className='section section_input'>
       <input onKeyDown={enterkeyPress} type='text'  placeholder='Enter City' 
          name='city'/>
       <button onClick={(e)=>handleUnitclick(e)}>&deg;F</button>
         </div>
 
         <div className='section section_temperature'>
        <div className='icon'>
       <h3>{`${weather.name}, ${weather.country}`}</h3>
       <img src={weather.iconUrl}
       alt='weather-icon'  />

       <h3>{weather.description}</h3>

      </div>

      <div className='temperature'>
        <h1>{ `${weather.temp.toFixed()}`} &deg;{`${unit==='metric'?"C":"F"}`} 
          </h1>
         </div>
         </div>

         {/* description */}

         <Description weather={weather} units={unit}/>

         </div>

      }
      


      


    


   
       </div>

        {weather && <Forcast lon={weather.lon} lat={weather.lat} />}

      
     </div>
     
     )
   }
    

     


      
    

export default Home
