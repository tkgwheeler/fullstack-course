import React, { useState } from "react";
import ReactDOM from "react-dom";

const QuoteVotes = props => {
  return (
    <>
      <p>Has {props.voteCount} votes</p>
    </>
  );
};

const MostVotes = props => {
  return (
    <>
      <p>{anecdotes[props.anecdote]}</p>
      <p>Has {props.voteCount} votes</p>
    </>
  );
};

const App = props => {
  const arr = new Array(anecdotes.length).fill(0);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(arr);
  const [mostVoted, setMostVoted] = useState(0);
  const min = 0;
  const max = anecdotes.length;
  let highestVote = 0;

  const changeSelection = () => {
    const randomNum = Math.floor(Math.random() * (+max - +min) + +min);
    if (randomNum === selected) {
      return;
    }
    setSelected(randomNum);
  };

  const castVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    const largestVote = Math.max.apply(Math, copy);
    if (largestVote > Math.max.apply(Math, votes)) {
      setMostVoted(copy.indexOf(largestVote));
    }
    setVotes(copy);
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <QuoteVotes anecdote={selected} voteCount={votes[selected]} />
      <button onClick={castVote}>Vote</button>
      <button onClick={changeSelection}>New anecdote</button>
      <h2>Anecdote with the most votes</h2>
      <MostVotes anecdote={mostVoted} voteCount={votes[mostVoted]} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
