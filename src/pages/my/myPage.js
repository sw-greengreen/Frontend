import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {BsCaretLeft} from "react-icons/bs";
import {BsCaretRight} from "react-icons/bs";
import {BsChevronLeft} from "react-icons/bs";
import {BsChevronRight} from "react-icons/bs";
import "./myPage.css"
import Swal from "sweetalert2"
import { call } from "../../hooks/usefetch"

function MyPage() {
  const navigate = useNavigate();
  const userid = window.localStorage.getItem("id");
  const current_username = window.localStorage.getItem("username");

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [point, setPoint] = useState("");
  const [achievement, setAchievement] = useState("");
  console.log(userid);

  useEffect(() => {
    async function getUserInfo(){
      if (userid == null){
        Swal.fire({
          icon: 'error',
          title: '로그인 후 이용해 주세요.',
        })
        navigate("/login")
      }
      else{
        call(`/auth/${userid}`, "GET").then((response)=>{
          console.log(response);
          if(response.success){
            setName(response.result.name);
            setUsername(response.result.username);
            setPhone(response.result.phone);
            setPoint(response.result.point);
            setAchievement(response.result.achievement);
          }
        });
      }
    }
    getUserInfo();
  }, []);
  return (
    <div id="myPage">
      <div className="userFrame">
        <img src='/img/user.png' alt='사용자 프로필' className="userPic"></img>
        <div className="userInfo">
          <div className="title">
            <p className="user">{ current_username }</p>
            <p className="editUser">회원정보 수정</p>
          </div>
          <div className="innerText"><p>등급 &nbsp;&nbsp; </p> <p>{ achievement }</p></div>
          <div className="divider"/>
          <div className="innerText"><p>아이디 &nbsp;&nbsp; </p> <p>{ username }</p></div>
          <div className="innerText"><p>비밀번호</p> <p>********</p></div>
          <div className="innerText"><p>전화번호</p> <p>{ phone }</p></div>
          <div className="innerText"><p>포인트 &nbsp;&nbsp; </p> <p>{ point }</p></div>
        </div>
        <div className="medal">
          메달
        </div>
      </div>

      <div className="findMenu">
        <a className="inactiveFind" href="/mypage">찾아주세요</a>
        <a className="activeFind" href="/mypage">찾았어요</a>
      </div>

      <div className='board-kinds'>
        <span>최신순</span><span>|</span> <span>조회순</span><span>|</span>
        <span>해결</span><span>|</span><span>미해결</span>

      </div>

      <div className='item-list'>
            <div className='boxFrame' onClick={()=>{navigate("/boardDetail")}}>
              <div className='pictureFrame'>
                <img src='/img/test_img.jpg'></img>
              </div>
              <div className='board-title'>
                <h5>121. 회색 가죽지갑 찾아가...</h5>
              </div>
              <hr/>
              <p><span className='border-writer'>지영84</span><span className='border-time'>24분 전</span></p>
              <div className='board-tag'>
                <div className='solution'>
                  해결
                </div>
                <div className='hashtag'>
                #가죽지갑
                </div>
              </div>
            </div>
            <div className='boxFrame'  onClick={()=>{navigate("/boardDetail")}}>
              <div className='pictureFrame'>
                <img src='/img/test_img.jpg'></img>
              </div>
              <div className='board-title'>
                <h5>53. 국민은행 체크카드 민...</h5>
              </div>
              <hr/>
              <p><span className='border-writer'>지영84</span><span className='border-time'>12시간 전</span></p>
              <div className='board-tag'>
                <div className='unresolved'>
                  미해결
                </div>
                <div className='hashtag'>
                #체크카드
                </div>
              </div>
            </div>
            <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
            <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
            <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
        </div>
        <div className='item-list'>
          <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
            <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
            <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
            <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
            <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
        </div>
        <div className='item-list'>
        <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
            <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
            <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
            <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
            <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
        </div>
        <div className='item-list'>
        <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
            <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
            <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
            <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>  
            <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
            
        </div>
        <div className='transfer-num'>
          <BsCaretLeft/> &nbsp;
          <BsChevronLeft/>&nbsp;
          1 2 3 4 5
          &nbsp;<BsChevronRight/>
          <BsCaretRight/>&nbsp;
        </div>
    </div>
  );
}

export default MyPage;