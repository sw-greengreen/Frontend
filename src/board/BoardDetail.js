import './boardDetail.css';
import Modal  from './Modal';
import React, { useEffect, useState} from 'react';
import axios from 'axios'

function BoardDetail(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [postData, setPostData] = useState([]);
  const [commentList,SetCommentList] = useState([]);
  const [imageUrl,setImageUrl] = useState("");
  const [postWriter,setPostWriter] = useState("");

  useEffect(() => {
    document.addEventListener('click', clickModalOutside);

    return () => {
      document.removeEventListener('click', clickModalOutside);
    };

  });
  const setData = async (data) => {
    try {
      await setPostData(data);
      setImageUrl('/img/'+postData.photo);

    } catch (e) {
      console.log(e);
    }
  };

    //게시물 조회
    useEffect(() => {
      async function getData() {
        try {
          const response = await axios
            .get(
              `http://localhost:8080/api/v1/post/1`
            )
            .then((response) => {
              console.log("난 게시물 data");
              console.log(response);
              if (response.data.success) {
                console.log(JSON.stringify(response.data.result));
                const data = response.data.result;
                setData(data);
                setPostWriter(response.data.result.user["username"]);
              }
            })
            .catch(function (error) {
              alert("게시물을 가져오지 못 했습니다.");
              console.log(error);
              throw error;
            });
        } catch (error) {
          alert("게시물을 가져오지 못 했습니다.");
          console.log(error);
          throw error;
        }
      }
      getData();
    }, [imageUrl]);


  // 댓글 조회
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios
          .get(
            `http://localhost:8080/post/1/comment`
          )
          .then((response) => {
            if (response.data["success"] == true) {
              const data = response.data["result"];
              SetCommentList(data);
              console.log("난 댓글 data");
              console.log(data);
            }
          })
          .catch(function (error) {
            alert("댓글을 가져오지 못 했습니다.");
            console.log(error);
            throw error;
          });
      } catch (error) {
        alert("댓글을 가져오지 못 했습니다.");
        console.log(error);
        throw error;
      }
    }
    getData();
  }, [SetCommentList]);

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
              <img src = {imageUrl} alt='게시판 상세사항 이미지'></img>
            </div>
            <div className='item-content-frame'>
              <h3><span> {postData.id}</span> {postData.title}</h3>
              <hr></hr>
              <div className='item-content-detail'>
                <div className='item-title'>
                  <span>{postWriter}</span>
                  <span>{postData.createdAt}</span>
                  <span>120</span>
                  <span>200 p</span>
                </div>
                <hr></hr>
                <div className='item-content'>
                  {postData.content}
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
              {
                commentList.length <= 0 ? (
                  <tr key={"nothing"}>
                    <td colSpan="5">등록된 댓글이 없습니다.</td>
                  </tr>
                ):(
                  commentList.map((comment,i) => (
                    <tr>
                      <td>
                        <span>{comment.username}</span>
                        <span>대댓글 디엠 수정</span>
                    </td>
                    <td> 
                      <span>{comment.content}</span>
                    </td>
                  </tr>
                  ))
                )
              }
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