import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <table style={{ borderCollapse: "collapse", width: "10%" }}>
      <tbody>
        <tr>
          <td style={{ textAlign: "left", padding: "5px" }}>{text}</td>
          <td style={{ textAlign: "right", padding: "5px" }}>{value}</td>
        </tr>
      </tbody>
    </table>
  );
  
  
}

const Stats = ({good,neutral,bad}) => {
  // const upGood = (good) => {
  //   setGood(props)
  // }
  // const upNeutral = (neutral) => {
  //   setNeutral(props)
  // }
  // const upBad = (bad) => {
  //   setBad(props)
  // }

  let total = good + bad + neutral
  let average = (good - bad)/total
  let positive = (good/total) * 100 + '%';

  if (total == 0) {
    return <div>No Feedback given</div>
  }

  return (
    <div>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="total" value={total}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="positive" value={positive}/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
    
      <h2>stats</h2>
      <Stats good={good} neutral={neutral} bad={bad} />
      {/* <div>good: {good}</div>
      <div>neutral: {neutral}</div>
      <div>bad: {bad}</div>
      <div>all: {all()}</div>
      <div>average: {average()}</div>
      <div>positive: {positive()}%</div> */}
    </div>

  )
}

export default App