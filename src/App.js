import MainPage from "./pages/main/MainPage";
import LoginPage from "./pages/login/loginPage";
import RegisterPage from "./pages/register/registerPage";
import Navigation from "./component/navigation";
import BoardUpload from "./board/boardUpload";
import BoardDetail from "./board/BoardDetail";
import PleaseFind from "./board/pleaseFind";
import FindIt from "./board/findIt";
import FindBoardUpload from "./board/findBoardUpload";

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
          <Route path="/pleaseFind" element={<PleaseFind />} />
          <Route path="/findIt" element={<FindIt />} />
          <Route path="/findBoardUpload" element={<FindBoardUpload />} />
        </Routes>
      </Router>
       {/* <Footer /> */}
    </div>
  );
}

export default App;
