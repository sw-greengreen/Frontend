import MainPage from "./pages/main/mainPage";
import LoginPage from "./pages/login/loginPage";
import FindUserIDPage from "./pages/finduser/findUserIDPage";
import FindUserPWPage from "./pages/finduser/findUserPWPage";
import RegisterPage from "./pages/register/registerPage";
import Navigation from "./component/navigation";

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
          <Route path="/finduser/id" element={<FindUserIDPage />} />
          <Route path="/finduser/pw" element={<FindUserPWPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
       {/* <Footer /> */}
    </div>
  );
}

export default App;
