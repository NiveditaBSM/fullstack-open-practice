const Weather = ({ weatherField }) => {

    if (weatherField) {
        return (
            <div>
                <h3> Weather in {weatherField.location.name}</h3>
                <p> temperature- {weatherField.current.temp_c}</p>
                <img src={weatherField.current.condition.icon} alt={weatherField.current.condition.text}
                    style={{ width: '150px', height: 'auto' }} />
                <p> wind {weatherField.current.wind_kph} km/h</p>
            </div>
        )
    }
    else {
        return (
            <>
            </>
        )
    }
}

export default Weather