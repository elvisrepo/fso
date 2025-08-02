import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterSearch, setFilterSearch] = useState('')


  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  //add function
  const addPerson = (e) => {
    e.preventDefault()


    // check whether person name already exists in persons
    if (persons.some(per => per.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already in the phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }

      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }


  }

  // onChange event handler
  const handleNameChange = (e) => {

    setNewName(e.target.value)

  }

  const handleNumberChange = (e) => {

    setNewNumber(e.target.value)

  }

  const handleFilterSearch = (e) => {

    setFilterSearch(e.target.value)

  }

  // filter persons list
  const filteredPersons = persons.filter(per => per.name.toLowerCase().includes(filterSearch.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterSearch} handler={handleFilterSearch} />

      <PersonForm
        newName={newName} nameHandler={handleNameChange}
        newNumber={newNumber} numberHandler={handleNumberChange}
        addPerson={addPerson}
      />

      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App