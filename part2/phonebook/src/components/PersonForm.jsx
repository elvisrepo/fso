

const PersonForm = ({ newName, newNumber, nameHandler, numberHandler, addPerson }) => {

    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input value={newName}
                    onChange={nameHandler}
                />
            </div>
            <div>
                number: <input value={newNumber}
                    onChange={numberHandler}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm