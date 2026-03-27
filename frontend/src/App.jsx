import { Route, Routes } from "react-router-dom"

import Home from "./pages/home.jsx"
import Collection from "./pages/collection.jsx"
import About from "./pages/about.jsx"
import Contact from "./pages/contact.jsx"
import Product from "./pages/product.jsx"
import Cart from "./pages/cart.jsx"
import Login from "./pages/login.jsx"
import PlaceOrder from "./pages/placeOrder.jsx"
import Orders from "./pages/orders.jsx"
import Navbar from "./components/navbar.jsx"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </>
  )
}

export default App