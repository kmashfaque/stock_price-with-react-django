import Props from "./components/props"
import LiftingStateUp from "./components/liftingstateUp"


function App() {


  
  // let price =99 

  const gettingdatafrmChild = (data) => {
    console.log(data)
  }

  return (
    <>
      
      {/* <Props stock = "Apple" price={price}/> */}
      <LiftingStateUp getData = {gettingdatafrmChild}/>
    </>
  )
}

export default App
