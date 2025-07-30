import { useState } from 'react'


const Feedback = () => {
  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' />
      <Button />
      <Button />
    </div>
  )
}

const Button = ({ onClickHandler, text }) => {
  return (
    <button onClick={onClickHandler}> {text}</button>
  )
}
const Statistics = ({ good, neutral, bad }) => {

  return (
    <>
      <h1>statistics</h1>
      <h3>good {good}</h3>
      <h3>neutral {neutral}</h3>
      <h3>bad {bad}</h3>
    </>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // give feedback  h1 and 3 buttons with onclick event handlers
  //statistics h1 followed by the actual stats

  const goodHandler = () => setGood(good + 1)
  const neutralHandler = () => setNeutral(neutral + 1)
  const badHandler = () => setBad(bad + 1)


  return (
    <div>
      <h1>give feedback</h1>
      <Button onClickHandler={goodHandler} text='good' />
      <Button onClickHandler={neutralHandler} text='neutral' />
      <Button onClickHandler={badHandler} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App