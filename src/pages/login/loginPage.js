import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./loginPage.css"
//import { login } from "../../hooks/usefetch"
import Swal from "sweetalert2"

function LoginPage() {
  const navigate = useNavigate();
  const [User, setUser] = useState({"userId":"", "password" : ""});

  // const onLogin = (e) =>{
  //     e.preventDefault();
  //     login(User).then((response)=>{
  //         if(response.success){
  //             Swal.fire({
  //                 icon: 'success',
  //                 title: '로그인에 성공하셨습니다.',
  //               })
  //               .then((result)=>{
  //                   if(result.isConfirmed){
  //                       navigate("/")
  //                   }
  //               })
  //         }
  //         else{
  //             Swal.fire({
  //                 icon: 'error',
  //                 title: '로그인에 실패하셨습니다.',
  //               })
  //         }
  //     });
  // } 
  return (
    <div className="loginPage">
      <div className="loginFrame">
        {/* <form className="loginForm" onSubmit={(e)=>{onLogin(e)}}> */}
        <form className="loginForm">
          <figure className="loginLogo">
            <img
                src="img/login_logo.png"
                alt="로그인 로고 이미지"
            />
          </figure>
          <input type={"text"} class="loginregister__input" autoComplete="username" placeholder="아이디" required onChange={(e) =>{setUser({...User, "userId" : e.target.value})}}></input>
          <input type={"password"} class="loginregister__input" autoComplete="current-password" placeholder="비밀번호" required onChange={(e) =>{setUser({...User, "password" : e.target.value})}}></input>
          <button type="submit" class="loginregister__button">로그인</button>

          <div class="loginSettings">
            <div className="autoLoginFrame"><label htmlFor="autoLogin"><input id="autoLogin" type={"checkbox"}></input> &nbsp; 자동 로그인</label></div>

            <Link to="/findUser" class="findUser__button">아이디/비밀번호 찾기</Link>
          </div>
          <Link to="/register" class="register__button">회원가입</Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;