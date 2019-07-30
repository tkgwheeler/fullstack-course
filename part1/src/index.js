import React from "react";
import ReactDOM from "react-dom";

const Course = props => {
  const title = props.course.name;
  const parts = props.course.parts;

  return (
    <>
      <Header title={title} />
      <Content parts={parts} />
    </>
  );
};

const Header = props => {
  const title = props.title;
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

const Content = props => {
  const parts = props.parts.map(part => (
    <Part key={part.id} name={part.name} exercises={part.exercises} />
  ));
  return <div>{parts}</div>;
};

const Total = props => {
  const parts = props.course.parts;
  const exerciseArr = parts
    .map(part => part.exercises)
    .reduce((acc, val) => {
      return acc + val;
    });
  return (
    <>
      <p>
        <strong>Total = {exerciseArr} exercises</strong>
      </p>
    </>
  );
};

const Part = props => (
  <>
    <p>
      {props.name} : {props.exercises} exercises
    </p>
  </>
);

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      },
      {
        name: "boogie",
        exercises: 5,
        id: 4
      }
    ]
  };
  return (
    <div>
      <Course course={course} />
      <Total course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
