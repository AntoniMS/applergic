import React, { useState } from 'react';
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DiaryPage from "./pages/DiaryPage/DiaryPage";
import ScanPage from "./pages/ScanPage/ScanPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import ScanDetailPage from "./pages/ScanPage/ScanDetailPage/ScanDetailPage";
import { JwtContext } from './shared/contexts/JwtContext';
import RequireAuth from "./shared/components/RequireAuth/RequireAuth";

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem('token') || null);


  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />    
          <Route path="diary" element={<DiaryPage />} />        
          <Route path="welcome" element={<WelcomePage />} />
          <Route path="scan" element={<ScanDetailPage />} />  
          <Route path="scanPage" element={<ScanDetailPage />} />            
        </Routes>
      </Router>
    </div>
    </JwtContext.Provider>
  );
}

export default App;
