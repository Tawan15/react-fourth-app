import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import Smartphone from './pages/Smartphone.jsx'
import Computer from './pages/Computer.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx' // เพิ่มการ import ตรงนี้

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/smartphone" element={<Smartphone />} />
        <Route path="/product/computer" element={<Computer />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}