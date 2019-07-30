import React from "react";

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

export default Courses;
