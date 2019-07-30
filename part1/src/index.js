import React from "react";
import ReactDOM from "react-dom";

const Course = props => {
  const title = props.name;
  const parts = props.parts;

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
  const parts = props.parts;
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

const Courses = props => {
  const eachCourse = props.courses.map(course => (
    <>
      <Course name={course.name} key={course.id} parts={course.parts} />
      <Total parts={course.parts} />
    </>
  ));
  return <div>{eachCourse}</div>;
};

const App = () => {
  return (
    <div>
      <Courses courses={courses} />
    </div>
  );
};

const courses = [
  {
    name: "Half Stack application development",
    id: 1,
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
  },
  {
    name: "Other Stack",
    id: 2,
    parts: [
      {
        name: "Blip",
        exercises: 10,
        id: 1
      },
      {
        name: "Blash",
        exercises: 7,
        id: 2
      },
      {
        name: "Blop",
        exercises: 14,
        id: 3
      },
      {
        name: "Bloop",
        exercises: 15,
        id: 4
      }
    ]
  }
];

ReactDOM.render(<App />, document.getElementById("root"));
