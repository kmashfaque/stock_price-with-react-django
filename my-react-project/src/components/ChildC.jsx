import { useContext } from "react"
import { StockContext, UserContext } from "../App"


const ChildC = () => {
    const stockData = useContext(StockContext)
    const userData = useContext(UserContext)
  return (
    <>
        <h2> Stock user name is {userData.user.name}. User status is {userData.user.isLoggedIn}</h2>
        
        <h2>
            ChildC -- stock is from {stockData.stock} and the price of the stock is {stockData.price}
        </h2>
        
        

    </>
  )
}

export default ChildC