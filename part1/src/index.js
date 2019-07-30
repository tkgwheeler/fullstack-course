import React from "react";
import ReactDOM from "react-dom";
import Courses from "./components/courses";

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
