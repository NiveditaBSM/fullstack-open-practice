import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'

const getAll = () => {
    console.log('making request to fetch data')
    return axios.get(`${baseUrl}all`).then(response => response.data)
}

const getCountry = (name) => {
    return axios.get(`${baseUrl}name/${name}`).then(response => response.data)
}

export default { getAll, getCountry }

