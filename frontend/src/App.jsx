import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import Footer from "./components/Footer/Footer"
import AppPromotion from "./components/AppPromotion/AppPromotion"

function App() {
  return (
    <>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <AppPromotion />
      <Footer />
    </>
  )
}

export default App
