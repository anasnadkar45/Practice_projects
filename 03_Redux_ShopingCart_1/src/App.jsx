import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import CustomNavbar from './components/CustomNavbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CustomNavbar />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<ProductList />} />
      </Routes>
    </>
  )
}

export default App
