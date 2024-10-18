import axios from "axios";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY
const baseUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`

const getWeather = (city) => {
    return axios.get(`${baseUrl}${city}&aqi=no`).then(response => response.data)
}

export default { getWeather }