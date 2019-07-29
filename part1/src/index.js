import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = props => {
  const statGood = props.good;
  const statNeutral = props.neutral;
  const statBad = props.bad;
  const allStats = +statGood + statNeutral + statBad;
  const averageStats = (statGood - statBad) / allStats;
  const percentGood = (statGood / allStats) * 100;

  if (allStats === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <Statistic text="Good:" value={statGood} />
      <Statistic text="Neutral:" value={statNeutral} />
      <Statistic text="Bad:" value={statBad} />
      <Statistic text="All:" value={allStats} />
      <Statistic text="Average:" value={averageStats.toFixed(2)} />
      <Statistic text="Satisfied:" value={`${percentGood.toFixed(2)} %`} />
    </div>
  );
};

const Statistic = props => {
  return (
    <>
      <p>
        {props.text}
        {props.value}
      </p>
    </>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
