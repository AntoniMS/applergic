import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="diary" element={<DiaryPage />} />
        <Route path="scan" element={<ScanPage />} />
        <Route path="scan/:id" element={<ScanDetailPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
