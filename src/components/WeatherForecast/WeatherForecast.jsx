import './WeatherForecast.css'
import WeatherIcon from '../WeatherIcon/WeatherIcon.jsx'
import WeatherData from '../WeatherData/WeatherData.jsx'

const WeatherForecast = ({forecasts}) => {
    return (
            <div className="weather">
                {forecasts.map((forecast, index) => (
                    <WeatherIcon
                        key={index}
                        img={forecast.img}
                        imgAlt={forecast.imgAlt}
                    />
                ))}
                {forecasts.map((forecast, index) => (
                    <WeatherData
                        key={index}
                        day={forecast.day}
                        conditions={forecast.conditions}
                        time={forecast.time}
                    />
                ))}
            </div>
    )
}

export default WeatherForecast