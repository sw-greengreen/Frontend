// import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./registerPage.css"
import Swal from "sweetalert2"
import { call } from "../../hooks/usefetch"

function RegisterPage() {
  const [User, setUser] = useState({"username":"", "userId":"", "password" : "", "userTel":""});

  const [confirmPW, setConfirmPW] = useState("");
  // const navigate = useNavigate();
  
  const registerValid = async (e)=>{
    e.preventDefault();
    if (confirmPW === User.password){
      console.log("비밀번호 맞음")}
    //   call("/auth/signup", "POST", User)
    //     .then((response)=>{
    //         if(response.success){
    //           Swal.fire({
    //               icon: 'success',
    //               title: '회원가입에 성공했습니다.',
    //             })
    //             .then((result)=>{
    //                 if(result.isConfirmed){
    //                     navigate("/login")
    //                 }
    //             })
    //         }
    //         else{
    //           Swal.fire({
    //               icon: 'error',
    //               title: '회원가입에 실패했습니다.',
    //             })
    //         }
    //     })
    //   } 
    else{
      alert("비밀번호를 올바르게 입력해주세요")
    }
  }

  return (
    <div class="registerPage">
      <div className="registerFrame">
        <figure className="registerLogo">
          <img
              src="img/logo.png"
              alt="로고 이미지"
              />
        </figure>
          <form className="registerForm" onSubmit={(e)=>{registerValid(e)}}>
        {/* <form className="registerForm"> */}
          <div class="textWrapper">
            <div class="title">본인 정보를 입력해주세요</div>
            <div class="requiredText">&nbsp; *필수작성</div>
          </div>

          <div class="wrapper">
            <div class="textWrapper">
              <div class="text">이름 / username</div>
              <div class="requiredText">*</div>
            </div>
            <input type={"text"} class="register__input" autoComplete="username" placeholder="최소 2자, 최대 20자" pattern="^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{2,20}$" required onChange={(e) =>{setUser({...User, "username" : e.target.value})}}></input>
          </div>

          <div class="wrapper">
            <div class="textWrapper">
              <div class="text">아이디</div>
              <div class="requiredText">*</div>
            </div>
            <input type={"text"} class="register__input" autoComplete="username" placeholder="최소 6자, 최대 20자" pattern="^[A-Za-z0-9]{6,20}$" required onChange={(e) =>{setUser({...User, "username" : e.target.value})}}></input>

            <div class="textWrapper">
              <div class="text">비밀번호</div>
              <div class="requiredText">*</div>
            </div>
            <input type={"password"} class="register__input" autoComplete="current-password" placeholder="숫자, 영문, 최소 8자" pattern="^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,50}$" required onChange={(e) =>{setUser({...User, "password" : e.target.value})}}></input>
            <input type={"password"} class="register__input" autoComplete="current-password-check" placeholder="비밀번호 확인" required onChange={(e) =>{setConfirmPW(e.target.value);}}></input>
          </div>

          <div class="wrapper">
            <div class="textWrapper">
              <div class="text">전화번호</div>
              <div class="requiredText">*</div>
            </div>
            <input type="tel" class="register__input" placeholder="01012345678" pattern="[0-9]{2,3}[0-9]{3,4}[0-9]{3,4}" maxlength="13" required onChange={(e) =>{setUser({...User, "userTel" : e.target.value})}}></input>
            <div class="description">계정 분실 시 본인인증 정보로 사용됩니다.</div>
          </div>

          <button type="submit" class="userRegister__button">회원가입</button>
        </form>
      </div>
    </div>
    );
  }
  
  export default RegisterPage;