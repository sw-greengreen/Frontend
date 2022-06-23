import { useState } from "react";
import { useNavigate } from "react-router-dom"
import './findUserIDPage.css';
import Swal from "sweetalert2"
import { call } from "../../hooks/usefetch"

function FindUserPage() {
  const navigate = useNavigate();
  const [User, setUser] = useState({"name":"", "phone":""});

  const onFindID = (e) =>{
    e.preventDefault();
    call("/auth/find/username", "POST", User).then((response)=>{
        if(response.success){
            Swal.fire({
                icon: 'success',
                title: '아이디 찾기 결과',
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
            navigate("/findUserID")
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
            <a className="activeFind" href="/finduserID">아이디 찾기</a>
            <a className="inactiveFind" href="/finduserPW">비밀번호 찾기</a>
          </div>
          <form className="findForm" onSubmit={(e)=>{onFindID(e)}}>
          {/* <form className="findForm"> */}
            <div className="wrapper">
              <div className="textWrapper">
                <div className="text">이름</div>
                <div className="requiredText">*</div>
              </div>
              <input type={"text"} className="find__input" autoComplete="name" placeholder="" pattern="^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{2,20}$" required onChange={(e) =>{setUser({...User, "name" : e.target.value})}}></input>
            </div>

            <div className="wrapper">
              <div className="textWrapper">
                <div className="text">전화번호</div>
                <div className="requiredText">*</div>
              </div>
              <input type="tel" className="find__input" placeholder="01012345678" pattern="[0-9]{2,3}[0-9]{3,4}[0-9]{3,4}" maxLength="13" required onChange={(e) =>{setUser({...User, "phone" : e.target.value})}}></input>
            </div>

            <button type="submit" className="find__button">아이디 찾기</button>
          </form>
        </div>
      </div>
  );
}
export default FindUserPage;