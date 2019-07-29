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

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateGood = () => {
    setGood(good + 1);
  };

  const updateNeutral = () => {
    setNeutral(neutral + 1);
  };

  const updateBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={updateGood} text="Good" />
      <Button onClick={updateNeutral} text="Neutral" />
      <Button onClick={updateBad} text="Bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
