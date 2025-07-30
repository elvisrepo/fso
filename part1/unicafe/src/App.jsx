import { useState } from 'react'


// const Feedback = () => {
//   return (
//     <div>
//       <h1>give feedback</h1>
//       <Button text='good' />
//       <Button />
//       <Button />
//     </div>
//   )
// }

const Button = ({ onClickHandler, text }) => {
  return (
    <button onClick={onClickHandler}> {text}</button>
  )
}

const StatisticLine = ({ text, value }) => {

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good / all

  if (all === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }

  // return table wrapper, inside table rows(statistics lines?)
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tr>
          <td>Stat</td>
          <td>Value</td>
        </tr>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={all} />
        <StatisticLine text='average' value={average} />
        <StatisticLine text='positive' value={positive} />
      </table>

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