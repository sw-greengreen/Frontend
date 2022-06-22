import MainPage from "./pages/main/mainPage";
import LoginPage from "./pages/login/loginPage";
import RegisterPage from "./pages/register/registerPage";
import Navigation from "./component/navigation";
import BoardUpload from "./board/boardUpload";
import BoardDetail from "./board/boardDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/boardUpload" element={<BoardUpload />} />
          <Route path="/boardDetail" element={<BoardDetail />} />
        </Routes>
      </Router>
       {/* <Footer /> */}
    </div>
  );
}

export default App;
