import React from 'react'

const LiftingStateUp = (props) => {

const handleClick = () => {
    let stock = "Apple"
    props.getData(stock)
}
return (
    <>
        <h1>Lifting State Up</h1>
        <button onClick={handleClick}>click here</button>
    </>
  )
}

export default LiftingStateUp