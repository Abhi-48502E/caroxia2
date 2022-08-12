import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import SearchBar from './Components/Search/SearchBar';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Navbar />}/>
      <Route path="/signup" element={<Signup/>} />
      </Routes>
      </BrowserRouter>
      <SearchBar/>
      
    </div>
  );
}

export default App;
