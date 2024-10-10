const Part = (props) => {
  return(
    <>
      <p>
          {props.part} : {props.exercises}
      </p>
    </>
  )
}

const Body = (props)=>{
  console.log(props)
  return(
    <>
      <h1>{props.courseName}</h1>
      <Part part= {props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part part= {props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part part= {props.parts[2].name} exercises={props.parts[2].exercises}/>
      <p>Number of exercises {props.total}</p>
    </>
  )
}

const Total = (props) =>{
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  let sum = 0;
  parts.forEach((part)=> sum = sum + part.exercises)

  return (
    <div>
      <Body courseName={course} parts={parts} total={sum}/>
    </div>
  )
}

export default App