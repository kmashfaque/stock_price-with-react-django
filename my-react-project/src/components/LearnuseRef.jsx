import React, { useRef, useState } from 'react'

const LearnuseRef = () => {

    const [name, setName] = useState("")
    const refelement = useRef(null)
    const previousRef = useRef("")

    function clearText(){
    
        setName("")
        refelement.current.focus()
    }       

    const handleClick = (e) =>{
        previousRef.current = name
        setName(e.target.value)
    }
  return (
    <> 
        <input ref ={refelement} value = {name} onChange={handleClick}/>
        <button onClick={clearText}>
            Clear Text
        </button>
        <p> Previous Name: {previousRef.current}</p>

    </>
  )
}


export default LearnuseRef