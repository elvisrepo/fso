import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  console.log(votes)

  // on CLick random anecdote selected
  // get random num within anecdotes length, setSelected

  const nextHandler = () => {
    //between 0 and anecdotes len - 1
    const anec_length = anecdotes.length
    const rand = Math.floor(Math.random() * (anec_length))

    setSelected(rand)
  }

  ///   ancedote - vote
  const voteHandler = () => {
    // add to the votes count of the current index of selected
    const copy_Votes = [...votes]
    copy_Votes[selected] += 1
    setVotes(copy_Votes)
  }

  // iterate over the votes arr, find the most voted value, return its index

  let mostVotedIndex = 0
  let mostVotedValue = votes[0]

  votes.forEach((element, index) => {
    if (element > mostVotedValue) {
      mostVotedValue = element
      mostVotedIndex = index
    }
  });


  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <button onClick={nextHandler}>  Next anecdote</button>
      <button onClick={voteHandler}>  Vote</button>


      <h1>Anecdote with most votes</h1>
      {anecdotes[mostVotedIndex]}
    </div>
  )
}

export default App