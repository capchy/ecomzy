import './App.css';
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";


function App() {
  return (
    <div >
      <div className="bg-slate-900">
        <Navbar/>
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Cart" element={<Cart/>} /> 
      </Routes>
    </div>
  );
}

export default App;
