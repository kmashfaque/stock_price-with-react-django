import Props from "./components/props"
import LiftingStateUp from "./components/liftingstateUp"
import LearnUsestate from "./components/LearnuseState"
import LearnuseMemo from "./components/LearnuseMemo"
import ChildA from "./components/ChildA"
import { createContext, useState } from "react"
import LearnuseRef from "./components/LearnuseRef"
import LearnCustomHook from "./components/LearnCustomHook"



const StockContext = createContext()
const UserContext = createContext()

function App() {


  
  let price = 99 
  let stock = "Apple"

  const [user, setUser] = useState({name: "Rathan", isLoggedIn: "Logged In"})

  const getStock = (data) =>{
    console.log(data)
  }

  // const gettingdatafrmChild = (data) => {
  //   console.log(data)
  // }

  return (
    <>
      
      {/* <Props stock = "Apple" price={price}/> */}
      {/* <LiftingStateUp getData = {gettingdatafrmChild}/> */}
      {/* <LearnUsestate /> */}
      {/* <LearnuseMemo/> */}
      {/* <StockContext.Provider value = {{stock, price}}>
        <UserContext.Provider value ={{user, setUser}}>
          <ChildA/>
        </UserContext.Provider>
      </StockContext.Provider>
      */}

      {/* <LearnuseRef/> */}

      <LearnCustomHook/>
    </>
  )
}

export default App
export {StockContext, UserContext}
