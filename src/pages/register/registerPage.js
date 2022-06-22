import { useState } from "react"
import "./registerPage.css"

function RegisterPage() {
  const [User, setUser] = useState({"username":"", "userId":"", "password" : "", "passwordCheck":"", "userTel":""});
  
  // const onRegister = (e) =>{
  //   e.preventDefault();

  //   if (User.password !== User.passwordCheck){
  //     return alert("비밀번호와 일치하지 않습니다.")
  //   }
  //   else{
  //       register(User).then((response)=>{
  //           if(response.success){
  //               Swal.fire({
  //                   icon: 'success',
  //                   title: '로그인에 성공하셨습니다.',
  //                 })
  //                 .then((result)=>{
  //                     if(result.isConfirmed){
  //                         navigate("/")
  //                     }
  //                 })
  //           }
  //           else{
  //               Swal.fire({
  //                   icon: 'error',
  //                   title: '로그인에 실패하셨습니다.',
  //                 })
  //           }
  //       });
  //     } 

  //   }

  return (
    <div class="registerPage">
      <div className="registerFrame">
        <figure className="registerLogo">
          <img
              src="img/register_logo.png"
              alt="회원가입 로고 이미지"
              />
        </figure>

        {/* <form className="registerForm" onSubmit={(e)=>{onRegister(e)}}> */}
        <form className="registerForm">
          <div class="textWrapper">
            <div class="title">본인 정보를 입력해주세요</div>
            <div class="requiredText">&nbsp; *필수작성</div>
          </div>

          <div class="wrapper">
            <div class="textWrapper">
              <div class="text">이름 / username</div>
              <div class="requiredText">*</div>
            </div>
            <input type={"text"} class="register__input" autoComplete="username" placeholder="" required onChange={(e) =>{setUser({...User, "username" : e.target.value})}}></input>
          </div>

          <div class="wrapper">
            <div class="textWrapper">
              <div class="text">아이디</div>
              <div class="requiredText">*</div>
            </div>
            <input type={"text"} class="register__input" autoComplete="username" placeholder="" pattern="^[A-Za-z0-9]{6,20}$" required onChange={(e) =>{setUser({...User, "username" : e.target.value})}}></input>

            <div class="textWrapper">
              <div class="text">비밀번호</div>
              <div class="requiredText">*</div>
            </div>
            <input type={"password"} class="register__input" autoComplete="current-password" placeholder="숫자, 영문, 최소8자" pattern="^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$" required onChange={(e) =>{setUser({...User, "password" : e.target.value})}}></input>
            <input type={"password"} class="register__input" autoComplete="current-password-check" placeholder="비밀번호 확인" required onChange={(e) =>{setUser({...User, "passwordCheck" : e.target.value})}}></input>
          </div>

          <div class="wrapper">
            <div class="textWrapper">
              <div class="text">전화번호</div>
              <div class="requiredText">*</div>
            </div>
            <input type="tel" class="register__input" placeholder="01012345678" pattern="[0-9]{2,3}[0-9]{3,4}[0-9]{3,4}" maxlength="13" required onChange={(e) =>{setUser({...User, "userTel" : e.target.value})}}></input>
            <div class="description">계정 분실 시 본인인증 정보로 사용됩니다.</div>
          </div>

          <button type="submit" class="register__button">본인인증 후 회원가입</button>
        </form>
      </div>
    </div>
    );
  }
  
  export default RegisterPage;