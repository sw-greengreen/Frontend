import { useState } from "react";
import './findUserIDPage.css';

function FindUserPage() {
  const [User, setUser] = useState({"username":"", "userTel":""});
    return (
      <div class="findPage">
        <div className="findFrame">
          <figure className="findLogo">
            <img
                src="img/logo.png"
                alt="로고 이미지"
            />
          </figure>
          <div class="findMenu">
            <a class="activeFind" href="/finduserID">아이디 찾기</a>
            <a class="inactiveFind" href="/finduserPW">비밀번호 찾기</a>
          </div>
          {/* <form className="findForm" onSubmit={(e)=>{onfind(e)}}> */}
          <form className="findForm">
            <div class="wrapper">
              <div class="textWrapper">
                <div class="text">이름</div>
                <div class="requiredText">*</div>
              </div>
              <input type={"text"} class="find__input" autoComplete="username" placeholder="" required onChange={(e) =>{setUser({...User, "username" : e.target.value})}}></input>
            </div>

            <div class="wrapper">
              <div class="textWrapper">
                <div class="text">전화번호</div>
                <div class="requiredText">*</div>
              </div>
              <input type="tel" class="find__input" placeholder="01012345678" pattern="[0-9]{2,3}[0-9]{3,4}[0-9]{3,4}" maxlength="13" required onChange={(e) =>{setUser({...User, "userTel" : e.target.value})}}></input>
            </div>

            <button type="submit" class="find__button">아이디 찾기</button>
          </form>
        </div>
      </div>
  );
}
export default FindUserPage;