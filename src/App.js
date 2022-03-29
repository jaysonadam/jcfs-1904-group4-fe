import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./Components/Navigation/navigation"
import Home from "./Pages/Home/home"

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
};

export default App;