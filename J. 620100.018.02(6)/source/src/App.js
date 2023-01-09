import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cek from "./pages/Cek";
import Filter from "./pages/Filter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cek />} />
          <Route path="/:id" element={<Filter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
