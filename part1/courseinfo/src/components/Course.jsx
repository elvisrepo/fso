
const Header = ({ name }) => {

    return (
        <h1>{name}</h1>
    )
}

const Part = ({ name, exercises }) => (
    <p>{name} {exercises}</p>
)

const Content = ({ parts }) => {


    // parts and exercise passed as array of object
    // render each part-exercise using Part
    return (
        <div>
            {parts.map((obj_part, index) => {
                return <Part key={obj_part.id} name={obj_part.name} exercises={obj_part.exercises} />
            })}
        </div>
    )
}

const Total = ({ parts }) => {

    // get the parts array
    let sum = 0
    for (let exe of parts) {
        sum += exe.exercises
    }

    const total = parts.reduce((acc, part) => {
        console.log('current part ', part);

        return acc + part.exercises
    }, 0)


    return (
        <h4>total of exercises {total}
        </h4>

    )
}

const Course = ({ course }) => {
    console.log('Course props ', course);

    return (
        <>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
}



export default Course