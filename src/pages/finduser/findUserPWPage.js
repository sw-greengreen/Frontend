import { useState } from "react";
import { useNavigate } from "react-router-dom"
import './findUserPWPage.css';
import Swal from "sweetalert2"
import { call } from "../../hooks/usefetch"

function FindUserPage() {
  const navigate = useNavigate();
  const [User, setUser] = useState({"username":"", "phone":""});

  const onFindPW = (e) =>{
    e.preventDefault();
    call("/auth/find/password", "POST", User).then((response)=>{
        if(response.success){
            Swal.fire({
                icon: 'success',
                title: '비밀번호 찾기 결과',
                text: response.result,
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
                title: '해당하는 아이디가 없습니다.',
              })
            navigate("/findUserPW")
        }
    });
  } 

    return (
      <div className="findPage">
      <div className="findFrame">
        <figure className="findLogo">
          <img
              src="img/logo.png"
              alt="로고 이미지"
          />
        </figure>
        <div className="findMenu">
          <a className="inactiveFind" href="/finduserID">아이디 찾기</a>
          <a className="activeFind" href="/finduserPW">비밀번호 찾기</a>
        </div>

        <form className="findForm" onSubmit={(e)=>{onFindPW(e)}}>
        {/* <form className="findForm"> */}
          <div className="wrapper">
            <div className="textWrapper">
              <div className="text">아이디</div>
              <div className="requiredText">*</div>
            </div>
            <input type={"text"} className="find__input" autoComplete="username" placeholder="" pattern="^[A-Za-z0-9]{6,20}$" required onChange={(e) =>{setUser({...User, "username" : e.target.value})}}></input>
          </div>

          <div className="wrapper">
            <div className="textWrapper">
              <div className="text">전화번호</div>
              <div className="requiredText">*</div>
            </div>
            <input type="tel" className="find__input" placeholder="01012345678" pattern="[0-9]{2,3}[0-9]{3,4}[0-9]{3,4}" maxLength="13" required onChange={(e) =>{setUser({...User, "phone" : e.target.value})}}></input>
          </div>

          <button type="submit" className="find__button">비밀번호 찾기</button>
        </form>
      </div>
    </div>
    );
  }
  export default FindUserPage;