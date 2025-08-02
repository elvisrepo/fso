import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  //add function
  const addPerson = (e) => {
    e.preventDefault()


    // check whether person name already exists in persons
    if (persons.some(per => per.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already in the phonebook`)
    } else {
      const newPerson = {
        name: newName
      }

      setPersons(persons.concat(newPerson))
      setNewName('')
    }


  }

  // onChange event handler
  const handleNameChange = (e) => {

    setNewName(e.target.value)

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map(per => <p key={per.name}>{per.name}</p>)}

    </div>
  )
}

export default App