const Header = (props) => {

  return (
    <div>
    <p>'{props.course}'</p>
    </div>
  )
}

const Part = (props) =>  {
  return (
    <p>
      {props.name}, {props.number}
    </p>
  )
}


// this code also works but isnt as fun

// const Content = (props) => {
//   console.log(props.parts[0])
//   return (
//     <div>
//       <p> {props.parts[0].part} 
//             {props.parts[0].excersises} </p>
//             <p> {props.parts[1].part} 
//             {props.parts[1].excersises} </p>
//     </div>
//   )
// }



const Content = (props) => {
  // console.log(props.parts[0])
  return (
    <div>
      <Part name={props.parts[0].part} 
            number={props.parts[0].excersises} />
      <Part name={props.parts[1].part} 
            number={props.parts[1].excersises} />
      <Part name={props.parts[2].part} 
            number={props.parts[2].excersises} />
    </div>
  )
}

// const Total = (props) => {

//   return (
//     <div>
//       <p>
//         Total: {props.parts[0].excersises + props.parts[1].excersises + props.parts[2].excersises}
//       </p>
//     </div>
//   )
// }

// iterative way
const Total = (props) => {
  const totalExcercises = props.parts.reduce((sum, part) => sum + part.excersises, 0);

  return (
    <div>
      <p>Total: {totalExcercises}</p>
    </div>
  );
};



const App = () => {
  const course = { // bing
    name: 'Half Stack application development',
    parts: [
      {part: 'Fundamentals of React', excersises: 10},
      {part: 'Using props to pass data', excersises: 7},
      {part: 'State of a component', excersises: 14}
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      {/* <p>
        {part1} {exercises1}
      </p> */}

      <Content parts={course.parts}></Content>
      
      <Total parts={course.parts} />
    </div>
  )
}

export default App