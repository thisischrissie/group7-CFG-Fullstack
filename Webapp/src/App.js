import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Nav";
import DogForm from './components/DogForm'; 
import FoundRoute from './pages/FoundRoute';
import trails from './components/trailArr'; 
import Login from "./pages/Login";
import HomePage from "./pages/Homepage";
import AboutUs from "./pages/About";
import Profile from "./pages/Profile";
import Breed from './pages/Breeds'; 
import { selectUser } from "./redux/userSlice";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  return (
    <Router>
      <NavBar />
      {/* previously {user && <NavBar />} on line 20 but the Navbar disappeared on webpage*/}
      <main>
        <Routes>
          <Route path="/" element={user ? <HomePage /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/breeds" element={<Breed />} />
          <Route path="/FindRoute" element={<DogForm trails={trails} />} />
          <Route path="/FoundRoute" element={<FoundRoute />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
