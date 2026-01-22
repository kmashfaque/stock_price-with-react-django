import { useState } from "react"


const LearnForm = () => {
    
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
    })

    const handleInput = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleFormSumit = (e) =>{
        e.preventDefault(   )
        console.log("Form Submitted", formData)
    }
  return (
    <>
        <form action="" onSubmit={handleFormSumit}>
            First Name: <input type="text" name="firstName" onChange={handleInput} value={formData.firstName}/>
            <br></br>
            <br></br>
            Last Name: <input type="text" name="lastName" onChange={handleInput} value={formData.lastName}/>
            <br></br>
            <input type="submit" value="Submit"/>
        </form>  
    </>
  )
}

export default LearnForm