import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add/Add";
import Remove from "./pages/Remove/Rmove";
import Orders from "./pages/Orders/Orders";

function App() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Sidebar />
                <Routes>
                    <Route path="/add" element={<Add />} />
                    <Route path="/list" element={<Remove />} />
                    <Route path="/orders" element={<Orders />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
