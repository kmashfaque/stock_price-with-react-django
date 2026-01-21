import React from 'react'
import CustomCounter from '../Custom Hooks/Custom_Counter'

const LearnCustomHook = () => {

  const {count, increament, decrement, reset} = CustomCounter(10)


  return (
    <>
      LearnCustomHook
      <h2> Count {count} </h2>
      <button onClick={increament}> Increament </button>
      <button onClick={decrement}> Decrement </button>
      <button onClick={reset}> Reset </button>
    </>

  )
}

export default LearnCustomHook