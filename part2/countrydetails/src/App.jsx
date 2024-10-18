import { useEffect, useState } from 'react'
import countryServices from './services/countries'
import weatherService from './services/weather'
import Display from './components/Display'
import Country from './components/Country'
import Weather from './components/Weather'
// import './index.css'

function App() {
  const [searchField, setSearchField] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [countryList, setCountryList] = useState([])
  const [country, setCountry] = useState()
  const [weather, setWeather] = useState()

  useEffect(() => {
    countryServices.getAll().then(response => {
      const temp = response.map(country => country.name.common)
      console.log('received response')
      console.log('countries: ', temp)
      setAllCountries(temp)
      setCountryList(temp)
    })
  }, [])

  const handleSFChange = (event) => {

    console.log('search field: ', event.target.value)

    const searchTemp = event.target.value
    setSearchField(event.target.value)

    const tempCountryList = allCountries.filter((country) => {
      console.log('country: ', country, 'searchfield: ', searchTemp, 'isMatch: ', country.toLowerCase().includes(searchTemp.toLowerCase()))
      return country.toLowerCase().includes(searchTemp.toLowerCase())
    })

    //console.log('', tempCountryList)

    if (tempCountryList.length === 1) {
      //setCountryList()
      countryServices.getCountry(tempCountryList[0]).then(
        response => {
          setCountryList()
          setCountry(response)
          weatherService.getWeather(response.capital[0]).then(
            response => {
              console.log('weather', response)
              setWeather(response)
            }
          )
        }
      )


    } else {
      setCountryList(tempCountryList)
      setCountry()
      setWeather()
    }
  }

  const handleShow = (targetCountry) => {
    console.log('click show event triggered')
    console.log('country', targetCountry)

    countryServices.getCountry(targetCountry).then(response => {
      console.log('country details received in response: ', response)
      setCountry(response)
      weatherService.getWeather(response.capital[0]).then(
        response => {
          console.log('recieved weather:', response)
          setWeather(response)
        }
      )
    })

  }

  return (
    <>
      <div>
        find countries <input value={searchField} onChange={handleSFChange}></input>
      </div>
      <Display list={countryList} onShow={handleShow} />
      <Country countryField={country} />
      <Weather weatherField={weather} />
    </>
  )
}

export default App
