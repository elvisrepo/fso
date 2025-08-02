

const Persons = ({ persons }) => {
    return (
        <>
            <h2>Numbers</h2>
            {persons.map(per => <p key={per.name}>{per.name} {per.number}</p>)}
        </>
    )
}

export default Persons