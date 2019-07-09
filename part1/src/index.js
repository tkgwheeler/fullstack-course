import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props)=>(
    <>
          <h1>{props.course}</h1>  
    </>
)

const Content = (props)=>(
    <>
        <Part part={props.pt1} exercise={props.ex1}/>
        <Part part={props.pt2} exercise={props.ex2}/>
        <Part part={props.pt3} exercise={props.ex3}/>
    </>
)

const Total = (props)=>(
    <>
        <p>Total = {props.ex1 + props.ex2 + props.ex3} exercises</p>  
    </>
)

const Part = (props) =>(
    <>
        <p>{props.part} :{props.exercise} exercises</p>
    </>
)


const App = () =>{
    const course = 'Half Stack application development';
    const part1 ='Fundamentals of React';
    const exercises1 = 10;
    const part2 = 'Using props to pass data';
    const exercises2= 7;
    const part3 ='State of a component';
    const exercises3 = 14;
    
    return(
        <div>
            <Header course={course} />
            <Content pt1={part1} pt2={part2} pt3={part3} ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
            <Total ex1={exercises1} ex2 ={exercises2} ex3={exercises3}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

