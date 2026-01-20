import { useMemo, useState } from "react"

const LearnuseMemo = () => {

    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(1000000000)

    const increaseCount = () =>{
        setCount(count + 1)
    }

    // const countbignumber = () =>{
    //     let sum = 0
    //     for (let i = 1; i<=number; i++){
    //         sum += i;
    //     }
    //     return sum
    // }

    const sumofNumbers = useMemo(()=>{
        let sum = 0
        for (let i = 1; i <= number; i++){
            sum += 1
        }
        return sum

    },[])
    console.log(`the sum of the big number is ${number}`, sumofNumbers)
  return (
    <> 
        <h1> LearnuseMemo </h1>
        <button onClick={increaseCount}>Increase Count</button>
        <h4> {count} </h4>
        

    </>
  )
}

export default LearnuseMemo