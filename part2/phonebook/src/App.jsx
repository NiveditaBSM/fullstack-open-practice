import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import './index.css'


const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchField, setSearchField] = useState('')
  const [personsToShow, setPersonsToShow] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
    console.log("In effect")

    personService.getAll().then(
      (response) => {
        console.log("got response, data is:", response)
        setPersons(response);
        setPersonsToShow(response)
      }
    )
  }, [])

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSFChange = (event) => {

    const temp = event.target.value

    setSearchField(event.target.value)

    const tempShowList = persons.filter((person) => {
      console.log("Person name:", person.name.toLowerCase(), "Match:", person.name.toLowerCase().includes(temp.toLowerCase()))
      return person.name.toLowerCase().includes(temp.toLowerCase())
    })

    setPersonsToShow(tempShowList)
  }


  const addPerson = (event) => {

    event.preventDefault()

    console.log("Inside add person function")

    const oldPerson = persons.find((person) => person.name === newName)

    const latestPerson = {
      name: newName,
      number: newNumber
    }

    if (typeof oldPerson !== 'undefined') {
      if (window.confirm(`${newName} is already added to phonebook, 
      replace the old number with new one?`)) {
        personService.update(oldPerson.id, latestPerson).then(
          (response) => {
            console.log("Updated record, updated data:", response)
            const tempPersons = persons.filter((person) => person.id !== response.id)
            console.log("Updated Phonebook after removing old:", tempPersons)
            setPersons(tempPersons.concat(response))
            setPersonsToShow(tempPersons.concat(response))
            setNewName('')
            setNewNumber('')
            setSuccessMessage(`Success: ${response.name} updated`)
          }
        )
      }
    } else {
      personService.create(latestPerson).then(
        (response) => {
          console.log("created new record, new data:", response)
          setPersons(persons.concat(response))
          setPersonsToShow(persons.concat(response))
          setNewName('')
          setNewNumber('')
          setSuccessMessage(`Success: ${response.name} added`)
        }
      )
    }

    setTimeout(() => setSuccessMessage(null), 5000)

  }

  const onDelete = (id) => {

    const record = persons.find((person) => person.id === id)

    if (window.confirm(`Delete ${record.name}?`)) {
      personService.remove(id).then(
        (response) => {
          console.log("This record deleted:", response)
          const temp = persons.filter((person) => person.id !== id)
          console.log("Out of map")
          setPersons(temp)
          setPersonsToShow(temp)
          console.log("onDelete working fine")
        }
      ).catch(error => {
        setErrorMessage('Error: The record has been already deleted')
        // console.log(error)
        setTimeout(() => setErrorMessage(null), 5000)
        setPersons(persons.filter((person) => person.id !== id))
        setPersonsToShow(personsToShow.filter((person) => person.id !== id))
      })
    }

  }

  const closeErrorMessage = () => {
    console.log("Closing error message")
    setErrorMessage(null)
  }

  const closeSuccessMessage = () => {
    console.log("Closing success message")
    setSuccessMessage(null)
  }



  return (
    <div>
      <h2>Phonebook</h2>

      <Filter fieldValue={searchField} onFieldChange={handleSFChange} />

      <h2>add a new</h2>

      <PersonForm onSubmitFunc={addPerson}
        nameValue={newName} onNameChange={handleNameChange}
        numberValue={newNumber} onNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <table>
        <tbody>
          {personsToShow.map(record =>
            < tr key={record.id} >
              <td>{record.name} </td>
              <td>{record.number}</td>
              <td> <button key={record.id} onClick={() => onDelete(record.id)}>Delete</button></td>
            </tr>)
          }
        </tbody>
      </table>
      <Notification errorMessage={errorMessage} successMessage={successMessage}
        onErrClose={closeErrorMessage} onSuccClose={closeSuccessMessage} />
    </div >
  )
}

export default App