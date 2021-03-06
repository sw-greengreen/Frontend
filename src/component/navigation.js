import './navigation.css';
import Modal  from './Modal';
import React, { useEffect, useState} from 'react';
import { useNavigate} from "react-router-dom";

function Navigation(props) {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [isFindIt, setFindIt] = useState(false);
  const [isLogin, setLogin] = useState(false);

  useEffect(()=>{
    if(window.localStorage.getItem("username")!==null){
      setLogin(true);
    }
    else{
      setLogin(false);
    }
  },[isLogin])

 


  if(window.location.pathname !=="/boardUpload" && window.location.pathname !=="/pleaseFind" && isUpload){
    setIsUpload(false);
  }

  if(window.location.pathname !=="/findIt" && window.location.pathname !=="/findBoardUpload" && isFindIt){
    setFindIt(false);
  }
  useEffect(() => {
    if(window.location.pathname ==="/boardUpload" || window.location.pathname ==="/pleaseFind" && !isUpload){
      setIsUpload(true);
    }

    if(window.location.pathname ==="/findIt"  || window.location.pathname ==="/findBoardUpload" && !isFindIt){
      setFindIt(true);
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
                <img onClick={()=>{window.location.replace("/")}} style={{width:"200px"}} src='img/logo.png' alt='logo img'></img>  
              </div>
              {
              isUpload ? 
                  <div className='find-please'>
                    
                  <span style={{color:"#12DB64"}} onClick={() => navigate("/pleaseFind")}>찾아주세요&nbsp;</span>&nbsp;<span onClick={()=>{navigate("/findIt")}}>찾았어요</span>
                </div>
             
              :isFindIt?  <div className='find-please'>
                    
                          <span onClick={() => navigate("/pleaseFind")}>찾아주세요&nbsp;</span>&nbsp;<span style={{color:"#12DB64"}}  onClick={()=>{navigate("/findIt")}}>찾았어요</span>
                        </div>
            :
                  <div className='find-please'>
                  <span onClick={() => navigate("/pleaseFind")}>찾아주세요&nbsp;</span>&nbsp;<span onClick={()=>{navigate("/findIt")}}>찾았어요</span>
                </div>
              
              
              }
              
          </div>
          {
          window.localStorage.getItem("username")!==null ?
          isUpload ?
          <div className='loginFrame'>
              
          <div className='login-text'>| <span onClick={()=>{navigate("/boardUpload")}}>글쓰기</span> | <span onClick={()=>{navigate("/MyPage")}}>마이페이지</span> | <span className='alarm' onClick={openModal}>알림</span> | </div>
          <div className='logout' onClick={()=>{window.localStorage.clear();navigate("/")}}>
            로그아웃
          </div>
          
          </div>
          : isFindIt? 
          <div className='loginFrame'>
              
          <div className='login-text'>|  <span onClick={()=>{navigate("/findBoardUpload")}}>글쓰기</span> | <span onClick={()=>{navigate("/MyPage")}}>마이페이지</span>  | <span className='alarm' onClick={openModal}>알림</span> | </div>
          <div className='logout' onClick={()=>{window.localStorage.clear();navigate("/")}}>
            로그아웃
          </div>
          
          </div>
          :
          <div className='loginFrame'>
              
          <div className='login-text'>| <span onClick={()=>{navigate("/MyPage")}}>마이페이지</span>  | <span className='alarm' onClick={openModal}>알림</span> | </div>
          <div className='logout' onClick={()=>{window.localStorage.clear();navigate("/")}}>
            로그아웃
          </div>
          
          </div>
          :
          
          <div className='loginFrame1'>
                <div className='login-join' onClick={()=>{navigate("/login")}}>로그인/회원가입</div>
              </div> 
             
          }


              <Modal open={modalOpen} close={closeModal} header="Modal heading">
                <main> {props.children} </main>
              </Modal>
            
      </div>
    );
  }
  export default Navigation;