import MainPage from "./pages/main/mainPage";
import LoginPage from "./pages/login/loginPage";
import RegisterPage from "./pages/register/registerPage";
import FindUserIDPage from "./pages/finduser/findUserIDPage";
import FindUserPWPage from "./pages/finduser/findUserPWPage";
import Navigation from "./component/navigation";
import BoardUpload from "./board/boardUpload";
import BoardDetail from "./board/BoardDetail";
import PleaseFind from "./board/pleaseFind";
import FindIt from "./board/findIt";
import FindBoardUpload from "./board/findBoardUpload";
import MyPage from "./pages/my/myPage"
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
          <Route path="/findUserID" element={<FindUserIDPage />} />
          <Route path="/findUserPW" element={<FindUserPWPage />} />
          <Route path="/boardUpload" element={<BoardUpload />} />
          <Route path="/boardDetail" element={<BoardDetail />} />
          <Route path="/pleaseFind" element={<PleaseFind />} />
          <Route path="/findIt" element={<FindIt />} />
          <Route path="/findBoardUpload" element={<FindBoardUpload />} />
          <Route path="/MyPage" element={<MyPage />}/>
        </Routes>
      </Router>
       {/* <Footer /> */}
    </div>
  );
}

export default App;