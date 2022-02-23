import React, { useState, useEffect } from 'react';
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DiaryPage from "./pages/DiaryPage/DiaryPage";
import DiaryDetailPage from "./pages/DiaryPage/DiaryDetailPage/DiaryDetailPage";
import ScanPage from "./pages/ScanPage/ScanPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import ScanDetailPage from "./pages/ScanPage/ScanDetailPage/ScanDetailPage";
import ByePage from "./pages/ByePage/ByePage";
import { JwtContext } from './shared/contexts/JwtContext';
import RequireAuth from "./shared/components/RequireAuth/RequireAuth";
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem('token') || null);

  const isTokenExpiry = () => {
    const tokenUser = localStorage.getItem('expiredToken')

    if ( new Date().getTime() > tokenUser) {
      localStorage.removeItem('token');
    }
    
  }

  useEffect(() => {
    isTokenExpiry();   
  },[])

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<RequireAuth><ProfilePage /></RequireAuth>} />
          <Route path="register" element={<RegisterPage />} />    
          <Route path="diary" element={<RequireAuth><DiaryPage /></RequireAuth>} />   
          <Route path="diaryDetail" element={<RequireAuth><DiaryDetailPage /></RequireAuth>} />
          <Route path="favs" element={<RequireAuth><FavoritePage /></RequireAuth>} />      
          <Route path="welcome" element={<WelcomePage />} />
          <Route path="scan" element={<RequireAuth><ScanPage /></RequireAuth>} />  
          <Route path="scanPage" element={<RequireAuth><ScanDetailPage /></RequireAuth>} />            
          <Route path="bye" element={<ByePage />} />            
        </Routes>
      </Router>
    </div>
    </JwtContext.Provider>
  );
}

export default App;
