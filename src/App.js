import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



import ScanPage from "./pages/ScanPage/ScanPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
         
          <Route path="scan" element={<ScanPage />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;