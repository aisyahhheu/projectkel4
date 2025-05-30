import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Product from "./pages/Product"
import ProductDetail from "./pages/ProductDetail"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
