import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import Home from "./components/Home";
import Workout from "./components/Workout";
import Chart from "./components/Chart";

function App() {
  return (
    <BrowserRouter className="MyApp">
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/chart" element={<Chart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
