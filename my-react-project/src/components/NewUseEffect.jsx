import { useEffect, useState } from 'react'

const NewUseEffect = () => {
    
    const data = {
        Colors: ["red", "green", "yellow"],
        Fruits: ["Apple","mango", "Banana"]
    }

    // intiate states
    const [currentChoice, setCurrentChoice] = useState("Colors")
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(data[setCurrentChoice]);
        console.log("Data is fetched");

    }, [currentChoice]);

  return (
    <>
        <button onClick={() => setCurrentChoice("Colors")}> Colors </button> 
        <button onClick={() => setCurrentChoice("Fruits")}> Fruits </button>
        {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    
    </>
  )
}

export default NewUseEffect