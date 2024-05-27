import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Nav';
import Login from "./pages/Login";
// import HomePage from './Home';
import AboutUs from './pages/About';
import Profile from './pages/Profile';
import Breed from './pages/Breeds';
import QuestionPage from './pages/FindRoute';

import ResultPage from './pages/Map';

function App() {
  return (
    <Router>
     <NavBar />
     <main>
       <Routes>
       <Route path="/" element={<Login />} />
         {/* <Route path="/" element={<HomePage />} /> */}
         <Route path="/about" element={<AboutUs />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/breeds" element={<Breed />} />
         <Route path="/FindRoute" element={<QuestionPage />} />
         <Route path="/Map" element={<ResultPage />} />
         <Route path="/questions" component={QuestionPage} />
          <Route path="/results" component={ResultPage} />
       </Routes>
     </main>
   </Router>
 );
};


export default App;