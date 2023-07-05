
const API_KEY="25fcd6ab27f2d490c0c9f4dcb60e102b";

const makeIconUrl=(iconId)=>`https://openweathermap.org/img/wn/${iconId}@2x.png`;


const getWeatherData=async(city,unit)=>{

  const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`;

  const data=await fetch(URL)
  .then((res)=>res.json())
  .then((data)=>data)

  console.log(data)
  
  const {
    weather,
    main:{temp,feels_like,temp_min,temp_max,pressure,humidity},
    wind:{speed},
    sys:{country},
    name,
  
  
  }=data

  const {description,icon}=weather[0]

  return{
    description,
    iconUrl:makeIconUrl(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name

  }
}

export{getWeatherData}