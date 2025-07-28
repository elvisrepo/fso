
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {

  console.log('parts in content', props.parts)
  // parts and exercise passed as array of object
  // render each part-exercise using Part
  return (
    <div>
      {props.parts.map((obj_part, index) => {
        return <Part key={index} name={obj_part.name} exercises={obj_part.exercises} />
      })}
    </div>
  )
}

const Total = (props) => {

  // in props.exercises -> array of all exercises
  let sum = 0
  for (let exe of props.parts) {
    sum += exe.exercises

  }
  return (
    <p>Number of exercises {sum}
    </p>

  )
}

const App = () => {
  // course,part,exercise
  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }

  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )

}

export default App
