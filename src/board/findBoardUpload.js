import axios from 'axios';
import { useState } from 'react';
import { call } from '../hooks/usefetch';
import './findBoardUpload.css';
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

function FindBoardUpload() {
  const navigate = useNavigate();
  const [post, setPost] = new useState({"username":"jungeun919", "title":"", "content":"", "photo" : "", "hashtag":"", "postType":"DISCOVERY", "resolvingStatus":"WAITING", "isAnontymous":""})

  const [imgBase64, setImgBase64] = useState(""); // 파일 base64
  const [imgFile, setImgFile] = useState(null);	//파일	

const handleChangeFile = (event) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    }
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setImgFile(event.target.files[0]); // 파일 상태 업데이트

    }

  }


  const handleClick = () =>{
    const formdata = new FormData();
    formdata.append("file", imgFile);

    const config = {
      Headers: {
        'content-type':'multipart/form-data',
      },
    };
    axios.post("http://localhost:8080/api/v1/file", formdata, config).then((res) => {
      if(res.data.success){
        setPost({...post, "photo": res.data.result});
        submitBtn(res.data.result);
      }
    });
  }

  const submitBtn = (photo)=>{

     call("/api/v1/post", "POST", {...post, "photo": photo}).then((response)=>{
      
      if(response.success){
        Swal.fire({
          icon: 'success',
          title: '게시글 작성에 성공하셨습니다.',
        })
        .then((result)=>{
            if(result.isConfirmed){
                navigate("/")
            }
        })
      }
      else{
        Swal.fire({
          icon: 'error',
          title: '게시글 작성에 실패하셨습니다.',
        })
      }
      })

  }
    return (
      <div id="findBoardUpload">
        <div className='boardFrame'>
          <p><span>찾아주세요</span> &nbsp;|&nbsp; <span>찾았어요</span></p>

          <div className='board-title'>
            <h5>작성정보</h5>
            <p>*필수정보</p>
          </div>
          <hr></hr>
        </div>
        <div className='board-body'>
          상품이미지<span style={{color:"#12DB64", marginRight:"5%"}}>*</span>
          <div className='picture-frame'>
          {imgBase64 && <img src={imgBase64} alt="preview-img" />}
          </div>

          <form className='upload_input'>
            <input type="file" id="image" onChange={handleChangeFile}></input>
        </form>
        </div>

        <div className='board-hash'>
              <h5>#해시태그</h5>
              <div className='board-hashtags'>
                <input onChange={(e)=>{setPost({...post, "hashtag" : e.target.value})}} className='board-hashtag' type="text" placeholder='#해시태그 작성 후 Enter'></input>
                </div>
              <hr></hr>
              <div>
              <div className='title'><p>제목</p><span style={{color:"#12DB64", marginRight:"10%"}}>*</span> <input onChange={(e)=>{setPost({...post, "title" : e.target.value})}} placeholder='제목을 작성해주세요' type="text"></input></div>

              <div className='content'><p>내용</p><span style={{color:"#12DB64", marginRight:"10%"}}>*</span><textarea onChange={(e)=>{setPost({...post, "content" : e.target.value})}} placeholder='내용을 작성해주세요'></textarea></div>
              </div>
              <button onClick={handleClick}>작성완료</button>
          </div>

         
      </div>
    );
  }
  
  export default FindBoardUpload;