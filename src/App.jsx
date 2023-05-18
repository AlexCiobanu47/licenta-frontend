import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Readings from "./pages/Readings";
function App() {
  return (
    <div className="app flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/readings" element={<Readings />} />
      </Routes>
    </div>
  );
}

export default App;
