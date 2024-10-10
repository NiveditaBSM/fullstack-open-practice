import { useState } from 'react'

const Display = ({ text }) => {
  return (
    <h2>{text}</h2>
  )
}

const Button = ( { onSmash, text} ) => {
  return (
    <button onClick={onSmash}> {text} </button>
  )
}

const StatLine = ({text, value}) => {
  if (text==="positive"){
    return(
      <tr>
        <td>{text}</td>
        <td>{value}%</td>
      </tr>
    )
  }
  return (
    <>
      <tr>
      <td>{text}</td>
      <td>{value}</td>
      </tr>
    </> 
  )
}

const Statistics = ({stats}) => {
  console.log(stats)
  if((stats[0]===0) && (stats[1]===0) && stats[3]==0){
    return(
      <p> No feedback given</p>
    )
  }

  return (
    <table>
      <tbody>
        <StatLine text="good" value={stats[0]}/>
        <StatLine text="neutral" value={stats[1]}/>
        <StatLine text="bad" value={stats[2]}/>
        <StatLine text="all" value={stats[3]}/>
        <StatLine text="average" value={stats[4]}/>
        <StatLine text="positive" value={stats[5]}/>
      </tbody>
    </table>
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)
  const [pos, setPos] = useState(0)
  
  const calcStat =(updatedgood, updatedbad, updatedall) => {
    let tempAv = (updatedgood + updatedbad*-1)/updatedall
    let tempPos = updatedgood / updatedall *100
    setAvg(tempAv)
    setPos(tempPos)
  }

  const addGood = () =>{
    setGood((prevGood)=> prevGood+1)
    setAll((prevAll) => prevAll+1)
    calcStat(good+1, bad, all+1)
  }

  const addNeutral= () =>{
    setNeutral((prevNeutral) => prevNeutral+1)
    setAll((prevAll) => prevAll+1)
    calcStat(good, bad, all+1)
  }

  const addBad = () => {
    setBad((prevBad) => prevBad+1)
    setAll((prevAll) => prevAll+1)
    calcStat(good, bad+1, all+1)
  }

  return (
    <div>
      <Display text="give feedback"/>
      <Button onSmash={addGood} text="good"/>
      <Button onSmash={addNeutral} text="neutral"/>
      <Button onSmash={addBad} text="bad"/>
      <Display text="statistics"/>
      <Statistics stats={[good,neutral,bad,all,avg,pos]}/>
    </div>
  )
}

export default App
