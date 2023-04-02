import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from './pages/list/List';
import Turfs from './pages/turf/Turfs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turfs"  element={<List />}/> 
        <Route path="/turfs/:turfId" element={<Turfs/>}/> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;
