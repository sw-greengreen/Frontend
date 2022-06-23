import './pleaseFind.css';
import { BsFillCaretUpFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import {BsCaretLeft} from "react-icons/bs";
import {BsCaretRight} from "react-icons/bs";
import {BsChevronLeft} from "react-icons/bs";
import {BsChevronRight} from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { call } from '../hooks/usefetch';
import { useEffect, useState } from 'react';
function PleaseFind() {
  const [postList, setPostList] = new useState({});
  const [num, setNum] = new useState(0);
  const navigate = useNavigate();


  useEffect(()=>{
    call("/api/v1/post/all", "GET", "").then((res) =>{
      
      if(res.success ==='true' || res.success){
        setPostList(res.result);
        setNum(res.result.length)
        console.log(res.result.length)
        console.log(res);
      }
    })
  },[])

  function repeatBox(){
    console.log(postList[0]);
    let emptyNum = 10;
    let arr= [];
    
    for(let i = 0; i< num; i++){
      if(postList[i].postType==="LOST"){
        
        emptyNum--;
      arr.push(
        <div className='boxFrame' onClick={()=>{navigate("/boardDetail", {state: postList[i].id})}}>
        <div className='pictureFrame'>
          `<img src={"/img/"+postList[i].photo}></img>`
        </div>
        <div className='board-title'>
          <h5>{postList[i].id+". "}{postList[i].title}</h5>
        </div>
        <hr/>
        <p><span className='border-writer'>{postList[i].user.name}</span><span className='border-time'>24분 전</span></p>
        <div className='board-tag'>
          {postList[i].resolvingStatus==="WAITING" ? 
          <div className='unresolved'>
            미해결
          </div>
          :
          <div className='solution'>
            해결
          </div>
          }
          
          <div className='hashtag'>
            {postList[i].hashtag}
          </div>
        </div>
      </div>
      )
    }
    }

    for(let i = 0; i<emptyNum; i++){
      arr.push(
      <div className='boxFrame'>
            <div className='pictureFrame'>
              &nbsp;
            </div>
            <div className='board-title'>
              <h5>&nbsp;</h5>
            </div>
            <hr/>
            <p><span className='border-writer'></span><span className='border-time'>&nbsp;</span></p>
            <div className='board-tag'>
              <div className='unresolved'>
              &nbsp;
              </div>
              <div className='hashtag'>
              &nbsp;
              </div>
            </div>
          </div>
          )
    }

    return arr;
  }
    return (
      <div id="pleaseFind">
        <div className="banner">

        </div>
        <div className='item-board'>
          <div className='left-header'>
            <div className='left-header-text'>
              PLEASE<br/>
              FIND
              <hr/>
            </div>
            <div className='board-kinds'>
              <span>최신순</span><span>|</span> <span>조회순</span><span>|</span>
              <span>해결</span><span>|</span><span>미해결</span>

            </div>
          </div>
          <div className='right-header'>
            <input type="text" placeholder='| #해시태그, 제목'></input>
            <div className='icon'><BsSearch/></div>
            
          </div>
        </div>
        <div className='item-list'>
          {repeatBox()}
       
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
  
  export default PleaseFind;