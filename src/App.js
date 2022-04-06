import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Admin from './Pages/Admin/admin'
import Client from './Pages/Client/client'
import Address from './Pages/Client/address'
import Products from "./Pages/Products/products";
import Navigation from "./Components/Navigation/navigation"
import ProductDetail from "./Pages/ProductDetail/productDetail";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/address" element={<Address />} />
                <Route path="client" element={<Client />} />
                <Route path="products/:product_id" element={<ProductDetail />} />
            </Routes>
        </Router>
    )
};

export default App;