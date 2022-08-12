import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import SearchBar from './Components/Search/SearchBar';
import Signup from './Components/Signup/Signup';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/signup" element={<Signup />}> </Route>
            <Route path="/about" element={<About />}> </Route>
            <Route path="/contacts" element={<Contacts />}> </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <SearchBar />

    </div >
  );
}

export default App;
