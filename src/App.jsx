import Business from "./components/business/Business"
import Hero from "./components/hero/Hero"
import Login from "./components/login/Login"
import Midia from "./components/midia/Midia"
import Navbar from "./components/navbar/Navbar"
import Package from "./components/package/Package"

function App() {
 

  return (
    <>
     <Navbar />
     <Hero />
     <Midia/>
     <Business />
     <Login />
     <Package />
    </>
  )
}

export default App
