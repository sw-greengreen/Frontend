import './navigation.css';
import Modal  from './Modal';
import React, { useEffect, useState, useRef} from 'react';

function Navigation(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const modalEl = useRef();

  useEffect(() => {
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
              <div className='find-please'>
                <span>찾아주세요&nbsp;</span>&nbsp;찾았어요
              </div>
          </div>
          <div className='loginFrame'>
              {/* <div className='login-join'>
                로그인/회원가입
              </div> */}
              <div className='login-text'>| 마이페이지 | <span className='alarm' onClick={openModal}>알림</span> | </div>
              <div className='logout'>
                로그아웃
              </div>
             </div>
             

              <Modal ref={modalEl} open={modalOpen} close={closeModal} header="Modal heading">
                <main> {props.children} </main>에 내용이 입력된다. 리액트 함수형 모달
                팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!
              </Modal>
            
      </div>
    );
  }
 
  export default Navigation;
