import './navigation.css';
import Modal  from './Modal';
import React, { useEffect, useState} from 'react';
import { useNavigate} from "react-router-dom";

function Navigation(props) {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [isUpload, setIsUpload] = useState(false);



  console.log(window.location.pathname);
  
  useEffect(() => {
    if(window.location.pathname ==="/boardUpload" || window.location.pathname ==="/pleaseFind" && !isUpload){
      setIsUpload(true);
    }
    document.addEventListener('click', clickModalOutside);

    return () => {
      document.removeEventListener('click', clickModalOutside);
    };
  });

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const clickModalOutside = event => {
    if (modalOpen && event.target.className==="openModal modal") {
      setModalOpen(false);
    }
  };
    return (
      <div id="navigation">
 
          <div className='logoFrame'>
              <div className='logo'>
                <img alt='logo img'></img>
                
              </div>
              {isUpload ? 
                  <div className='find-please'>
                    
                  <span style={{color:"#12DB64"}} onClick={() => navigate("/pleaseFind")}>찾아주세요&nbsp;</span>&nbsp;<span>찾았어요</span>
                </div>
             
              :
              <div className='find-please'>
              <span onClick={() => navigate("/pleaseFind")}>찾아주세요&nbsp;</span>&nbsp;<span>찾았어요</span>
            </div>
              
              
              }
              
          </div>
          {isUpload ?
          <div className='loginFrame'>
              
          <div className='login-text'>| <span onClick={()=>{navigate("/boardUpload")}}>글쓰기</span> | <span>마이페이지</span> | <span className='alarm' onClick={openModal}>알림</span> | </div>
          <div className='logout'>
            로그아웃
          </div>
          
          </div>
          :
          <div className='loginFrame'>
              
          <div className='login-text'>| 마이페이지 | <span className='alarm' onClick={openModal}>알림</span> | </div>
          <div className='logout'>
            로그아웃
          </div>
          
          </div>
          }
          
          {/* <div className='login-join'>
                로그인/회원가입
              </div> */}
             

              <Modal open={modalOpen} close={closeModal} header="Modal heading">
                <main> {props.children} </main>에 내용이 입력된다. 리액트 함수형 모달
                팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!
              </Modal>
            
      </div>
    );
  }
  export default Navigation;
