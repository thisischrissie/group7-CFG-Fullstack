import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Nav";
import Login from "./pages/Login";
import HomePage from "./pages/Homepage";
import AboutUs from "./pages/About";
import Profile from "./pages/Profile";
// import Breed from './pages/Breeds';
import FindRoute from "./pages/FindRoute";
import { selectUser } from "./redux/userSlice";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  return (
    <Router>
      {user && <NavBar />}
      <main>
        <Routes>
          <Route path="/" element={user ? <HomePage /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/breeds" element={<Breed />} /> */}
          <Route path="/route" element={<FindRoute />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
