import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterSearch, setFilterSearch] = useState('')

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


      <div>
        filter shown with
        <input value={filterSearch}
          onChange={handleFilterSearch}
        >

        </input>
      </div>

      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {filteredPersons.map(per => <p key={per.name}>{per.name} {per.number}</p>)}

    </div>
  )
}

export default App