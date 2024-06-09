import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Nav";
import DogForm from "./components/DogForm";
import trails from "./components/Trails";
import Login from "./pages/Login";
import HomePage from "./pages/Homepage";
import About from "./pages/About";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Profile from "./pages/Profile";
import Breed from "./pages/Breeds";
import "bootstrap/dist/css/bootstrap.min.css";
import { selectUser } from "./redux/userSlice";
import { useSelector } from "react-redux";
import DogProfile from "./pages/DogProfile";

function App() {
  const user = useSelector(selectUser);
  return (
    <Router>
      {user && <NavBar />}
      <main>
        <Routes>
          <Route path="/" element={user ? <HomePage /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/breeds" element={<Breed />} />
          <Route path="/FindRoute" element={<DogForm trails={trails} />} />
          <Route path="/dogs" element={<DogProfile/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
