import { useState } from "react"

function CustomCounter(initialValue){

    const [count, setCounter] = useState(initialValue)

    const increament = () => setCounter(count+1)
    const decrement = () => setCounter(count-1)
    const reset = () => setCounter(initialValue)

    return {count, increament, decrement, reset}
    
}

export default CustomCounter