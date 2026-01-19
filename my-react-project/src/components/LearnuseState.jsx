import { useState } from 'react'

const LearnUsestate = () => {

    const [count, setCount] = useState(0)
    
    const increaseCount = () =>{
        setCount(count + 1)
    }

  return (
    <>
        <h1>learUsestate</h1>
        <button onClick={increaseCount}>Increase Count</button>
        <h2> Count {count} </h2>

    </>
  )
}

export default LearnUsestate