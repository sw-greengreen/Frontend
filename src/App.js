import MainPage from "./pages/main/mainPage";
import LoginPage from "./pages/login/loginPage";
import FindUserPage from "./pages/finduser/findUserPage";
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
          <Route path="/findUser" element={<FindUserPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
       {/* <Footer /> */}
    </div>
  );
}

export default App;
