import React from 'react';
import './Modal.css';
import {BsListUl} from "react-icons/bs";

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <h2>
            <BsListUl/> <span className='dm-user'>1920님</span>
            <hr/>
          </h2>
          <div className='dmFrame'>
            <input type="text" placeholder='메세지를 작성해주세요'></input>
            <div className='me'>버스 정류장 어떠세요?</div>
            <div className='me'>아닙니다!!</div>

            
            <div className='you'>늦게봐서 죄송합니다.....</div>
            <div className='you'>지갑 주인입니다ㅠㅠ 어디서 받으면 좋을까요?</div>
            
            <div className='send-time'>16:42</div>

            <div className='send-day'>2022.06.23</div>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
