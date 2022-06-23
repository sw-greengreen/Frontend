import './boardDetail.css';
import Modal  from './Modal';
import React, { useEffect, useState} from 'react';

function BoardDetail(props) {
  const [modalOpen, setModalOpen] = useState(false);

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
      <div id="boardDetail">
          <div className='boardFrame'>
            <div className='pictureFrame'>
              <img src='/img/test_img.jpg' alt='게시판 상세사항 이미지'></img>
            </div>
            <div className='item-content-frame'>
              <h3><span>53.</span> 회색 가죽지갑 찾아가세요</h3>
              <hr></hr>
              <div className='item-content-detail'>
                <div className='item-title'>
                  <span>지영84</span>
                  <span>2022.06.22 15:12</span>
                  <span>120</span>
                  <span>200 p</span>
                </div>
                <hr></hr>
                <div className='item-content'>
                학교 도서관에서 잃어버린 것 같아요..!
                </div>
                <button  onClick={openModal}>디엠하기</button>
              </div>
            </div>
   
          </div>
          
          <div className='comment-frame'>
            <p>
            댓글
            </p>
            <table>
              <tr>
                <td>
                  <span>지영84 2022.06.23 15:03</span>
                  <span>대댓글 디엠 수정</span>
                </td>
              </tr>
              <tr>
                <td>
                <span>1920 2022.06.23 14:03</span>
                <span>대댓글 디엠 수정</span>
                </td>
              </tr>
            </table>
            <input type="text"></input>
            <button>등록</button>
          </div>
          <Modal open={modalOpen} close={closeModal} header="Modal heading">
                <main> {props.children} </main>
              </Modal>
            
      </div>
    );
  }
  
  export default BoardDetail;