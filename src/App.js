import React from 'react';
//import { APIProvider } from '@vis.gl/react-google-maps';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Nav';
import Login from "./pages/Login";
import AboutUs from './pages/About';
import Profile from './pages/Profile';
import Breed from './pages/Breeds';
import FindRoute from './pages/FindRoute';
import FoundRoute from './pages/FoundRoute';

function App() {
  return (
   // <APIProvider apiKey={'AIzaSyA3kCKR6Ga3ulS90iodeVoSEm8WHYQorQs'} onLoad={() => console.log('Maps API has loaded.')}>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/breeds" element={<Breed />} />
            <Route path="/FindRoute" element={<FindRoute />} />
            <Route path="/FoundRoute" element={<FoundRoute />} />
          </Routes>
        </main>
      </Router>
  //  </APIProvider>
  );
};

export default App;
