import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Readings from "./pages/Readings";
function App() {
  return (
    <div className="app flex justify-center items-center h-screen bg-slate-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/readings" element={<Readings />} />
      </Routes>
    </div>
  );
}

export default App;
