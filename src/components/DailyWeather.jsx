import React from 'react';
import "./forcast.css"

const DailyWeather = ({ dateNum, dayIcon, tempHigh, tempLow,des}) => {
    dateNum = new Date(dateNum * 1000)
    dateNum.getDay()
    let options = { weekday: 'short'}
    dateNum = Intl.DateTimeFormat('en-US', options).format(dateNum)

  return (
      <div className="containerBox">
          <div className="day">
            <img src={dayIcon}  alt='icon' />
            <p>{des}</p>
            <h3>{dateNum}</h3>
            <div className="temp-container">
                <h4 className="temp-high">{tempHigh.toString().slice(0,2)}&deg;F</h4>
                <h4 className="temp-low">{tempLow.toString().slice(0,2)}&deg;F</h4>
            </div>
          </div>
      </div>
  )
}

export default DailyWeather
