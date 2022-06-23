import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./loginPage.css"
import Swal from "sweetalert2"
import { call } from "../../hooks/usefetch"

function LoginPage() {
  const navigate = useNavigate();
  const [User, setUser] = useState({"username":"", "password":""});

  const onLogin = (e) =>{
      e.preventDefault();
      call("/auth/login", "POST", User).then((response)=>{
          if(response.success){
            window.localStorage.setItem("username", response.result.username);
            window.localStorage.setItem("id", response.result.id);

            console.log("유저네임!!!!"+response.result.username)
              Swal.fire({
                  icon: 'success',
                  title: '로그인에 성공하셨습니다.',
                })
                .then((result)=>{
                    if(result.isConfirmed){
                        navigate("/")
                    }
                })
          }
          else{
              Swal.fire({
                  icon: 'error',
                  title: '로그인에 실패하셨습니다.',
                })
              navigate("/login")
          }
      });
  } 
  return (
    <div className="loginPage">
      <div className="loginFrame">
        <form className="loginForm" onSubmit={(e)=>{onLogin(e)}}>
        {/* <form className="loginForm"> */}
          <figure className="loginLogo">
            <img
                src="img/logo.png"
                alt="로그인 로고 이미지"
            />
          </figure>
          <input type={"text"} className="loginregister__input" autoComplete="username" placeholder="아이디" pattern="^[A-Za-z0-9]{6,20}$" required onChange={(e) =>{setUser({...User, "username" : e.target.value})}}></input>
          <input type={"password"} className="loginregister__input" autoComplete="current-password" placeholder="비밀번호" pattern="^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,50}$" required onChange={(e) =>{setUser({...User, "password" : e.target.value})}}></input>
          <button type="submit" className="loginregister__button">로그인</button>

          <div className="loginSettings">
            <div className="autoLoginFrame"><label htmlFor="autoLogin"><input id="autoLogin" type={"checkbox"}></input> &nbsp; 자동 로그인</label></div>

            <Link to="/findUserID" className="findUser__button">아이디/비밀번호 찾기</Link>
          </div>
          <Link to="/register" className="register__button">회원가입</Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;