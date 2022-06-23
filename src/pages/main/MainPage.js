import './mainPage.css';
import { BsFillCaretUpFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import {BsCaretLeft} from "react-icons/bs";
import {BsCaretRight} from "react-icons/bs";
import {BsChevronLeft} from "react-icons/bs";
import {BsChevronRight} from "react-icons/bs";
import { useNavigate} from "react-router-dom";
import { useEffect } from 'react';
import { call } from '../../hooks/usefetch';
import { useState } from 'react';
function MainPage() {

  const [postList, setPostList] = new useState({});
  const [loading, setLoading] = new useState(true);
  const [num, setNum] = new useState(0);

  const navigate = useNavigate();
    useEffect(()=>{
      call("/api/v1/post/all", "GET", "").then((res) =>{
        
        if(res.success ==='true' || res.success){
          setPostList(res.result);
          setNum(res.result.length)
          console.log(res.result.length)
          console.log(res);
          setLoading(false);
        }
      })
    },[])

    function repeatBox(){
      console.log(postList[0]);

      let arr= [];
      
      for(let i = 0; i< num; i++){
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

      for(let i = 0; i<20-num; i++){
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
      <div id="mainPage">
        <div className="banner">
          <div className="banner-gradient">

          </div>

          <div className="banner-text">
              <span className='b-text1'>FIND <br/>
              TOGETHER</span>
              <br/>
              <br/>
              <span className='b-text2'>
                학교 내에서 분실물을 등록하거나 조회하여 찾을 수 있도록 도와주는 커뮤니티 사이트
              </span>
          </div>

        </div>

        <div className='rankFrame'>
          <span className='rank-title'>&nbsp;실시간 랭킹</span>
          <span className='rank-name'>1등:폴로렌12</span>
          <span className='rank-change'><BsFillCaretUpFill/>14</span>
          <span className='rank-point'>12,457p</span>
        </div>

        <div className='item-board'>
          <div className='left-header'>
            <div className='left-header-text'>
              FIND<br/>
              TOGETHER
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
  
  export default MainPage;