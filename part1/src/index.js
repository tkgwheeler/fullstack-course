import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const allStats = +good + neutral + bad;
  const averageStats = (good - bad) / allStats;
  const percentGood = (good / allStats) * 100;

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <h1> Statistics</h1>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>All:{allStats}</p>
      <p>Average:{averageStats.toFixed(4)}</p>
      <p>Satisfied:{percentGood.toFixed(4)}%</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
