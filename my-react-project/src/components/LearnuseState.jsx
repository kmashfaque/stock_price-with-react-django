import { useEffect, useState } from 'react'

const LearnUsestate = () => {

    const [count, setCount] = useState(0)
    const [stockprice, setStockPrice] = useState({stock: "Apple", price:"100"})
    
    const increaseCount = () =>{
        setCount(count + 1)
    }

    const changeStockPrice = () =>{
      setStockPrice({...stockprice, price: "200"})
    }

    useEffect(()=>{
      // logic goes here
      console.log("UseEffect is called")
      console.log("Effect is called -->> count =", count)

      const id = setTimeout(() => {
        console.log("Delayed task after 3 seconds")
      }, 3000)

      //cleanup function 
      return () => {
        
        console.log("Cleanup function is called -->> previous count was", count)

        clearTimeout(id)
      }
    }, [count])

  return (
    <>
        <h1>learUsestate</h1>
        <button onClick={increaseCount}>Increase Count</button>
        <h2> Count {count} </h2>
        <button onClick={changeStockPrice}> Change Stock Price</button>
        <h3> Stock Price of {stockprice.stock} is {stockprice.price}</h3>

    </>
  )
}

export default LearnUsestate