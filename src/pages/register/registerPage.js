import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./registerPage.css"
import Swal from "sweetalert2"
import { call } from "../../hooks/usefetch"

function RegisterPage() {
  const navigate = useNavigate();
  const [User, setUser] = useState({"username":"", "name":"", "password":"", "phone":""});
  const [confirmPW, setConfirmPW] = useState("");
  
  const registerValid = (e)=>{
    e.preventDefault();
    if (confirmPW === User.password){
      call("/auth/signup", "POST", User)
        .then((response)=>{
            if(response.success){
              Swal.fire({
                  icon: 'success',
                  title: '회원가입에 성공했습니다.',
                })
                .then((result)=>{
                    if(result.isConfirmed){
                        navigate("/login")
                    }
                })
            }
            else{
              Swal.fire({
                  icon: 'error',
                  title: '회원가입에 실패했습니다.',
                })
            }
        })
      } 
    else{
      Swal.fire({
        icon: 'error',
        title: '비밀번호를 올바르게 입력해주세요.',
      })
    }
  }

  return (
    <div className="registerPage">
      <div className="registerFrame">
        <figure className="registerLogo">
          <img
              src="img/logo.png"
              alt="로고 이미지"
              />
        </figure>
          <form className="registerForm" onSubmit={(e)=>{registerValid(e)}}>
        {/* <form className="registerForm"> */}
          <div className="textWrapper">
            <div className="title">본인 정보를 입력해주세요</div>
            <div className="requiredText">&nbsp; *필수작성</div>
          </div>

          <div className="wrapper">
            <div className="textWrapper">
              <div className="text">이름</div>
              <div className="requiredText">*</div>
            </div>
            <input type={"text"} className="register__input" autoComplete="name" placeholder="최소 2자, 최대 20자" pattern="^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{2,20}$" required onChange={(e) =>{setUser({...User, "name" : e.target.value})}}></input>
          </div>

          <div className="wrapper">
            <div className="textWrapper">
              <div className="text">아이디</div>
              <div className="requiredText">*</div>
            </div>
            <input type={"text"} className="register__input" autoComplete="username" placeholder="최소 6자, 최대 20자" pattern="^[A-Za-z0-9]{6,20}$" required onChange={(e) =>{setUser({...User, "username" : e.target.value})}}></input>

            <div className="textWrapper">
              <div className="text">비밀번호</div>
              <div className="requiredText">*</div>
            </div>
            <input type={"password"} className="register__input" autoComplete="current-password" placeholder="영문, 숫자, 특수문자 모두 포함, 최소 8자" pattern="^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,50}$" required onChange={(e) =>{setUser({...User, "password" : e.target.value})}}></input>
            <input type={"password"} className="register__input" autoComplete="current-password-check" placeholder="비밀번호 확인" required onChange={(e) =>{setConfirmPW(e.target.value);}}></input>
          </div>

          <div className="wrapper">
            <div className="textWrapper">
              <div className="text">전화번호</div>
              <div className="requiredText">*</div>
            </div>
            <input type="tel" className="register__input" placeholder="01012345678" pattern="[0-9]{2,3}[0-9]{3,4}[0-9]{3,4}" maxLength="13" required onChange={(e) =>{setUser({...User, "phone" : e.target.value})}}></input>
            <div className="description">계정 분실 시 본인인증 정보로 사용됩니다.</div>
          </div>

          <button type="submit" className="userRegister__button">회원가입</button>
        </form>
      </div>
    </div>
    );
  }
  
  export default RegisterPage;