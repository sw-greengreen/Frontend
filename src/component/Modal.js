import React from 'react';
import './Modal.css';
import {BsListUl} from "react-icons/bs";

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <h2>
            <span className='dm-user'>알림</span>
            <hr/>
          </h2>
          <div className='alarm-kind'>포인트 | 댓글 | 디엠</div>
          <div className='alarm-frame first'>
            <div className='circle-box'>

            </div>
            <div className='alarm-contents'>
              <div className='alarm-system'><span>1920님이 댓글을 남겼습니다.&nbsp;&nbsp;&nbsp; </span> <span>5분전</span></div>
              <div className='alarm-content'>
                <span className='alarm-title'>회색 가죽지갑 찾아가세요 </span><br/>
                <span className='alarm-text'>디엠 확인해주세요!!</span>
              </div>
              
            </div>
          </div>
          <div className='alarm-frame'>
            <div className='circle-box'>

            </div>
            <div className='alarm-contents'>
              <div className='alarm-system'><span>1920님이 댓글을 남겼습니다.&nbsp;&nbsp;&nbsp; </span> <span>5분전</span></div>
              <div className='alarm-content'>
                <span className='alarm-title'>회색 가죽지갑 찾아가세요 </span><br/>
                <span className='alarm-text'>디엠 확인해주세요!!</span>
              </div>
              
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
