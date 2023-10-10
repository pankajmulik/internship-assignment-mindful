import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home} exact></Route>
        <Route path="/dashboard" Component={Dashboard}></Route>
      </Routes>
    </div>
  );
}

export default App;
