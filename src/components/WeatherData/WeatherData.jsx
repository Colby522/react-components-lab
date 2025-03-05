const WeatherData = ({day, conditions, time}) => {
    return (
        <>
            <h3>{day}</h3>
            <p><span>conditions:</span>{conditions}</p>
            <p><span>time:</span>{time}</p>
        </>
    )
}

export default WeatherData