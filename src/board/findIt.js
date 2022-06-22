import './findIt.css';
import { BsFillCaretUpFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import {BsCaretLeft} from "react-icons/bs";
import {BsCaretRight} from "react-icons/bs";
import {BsChevronLeft} from "react-icons/bs";
import {BsChevronRight} from "react-icons/bs";
function findIt() {
  
    return (
      <div id="findIt">
        <div className="banner">

        </div>
        <div className='item-board'>
          <div className='left-header'>
            <div className='left-header-text'>
              FIND<br/>
              IT
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
            <div className='boxFrame'>
              <div className='pictureFrame'>
                <img src='/img/test_img.jpg'></img>
              </div>
              <div className='board-title'>
                <h5>121. 회색 가죽지갑 찾아가...</h5>
              </div>
              <hr/>
              <p><span className='border-writer'>지영84</span><span className='border-time'>24분 전</span></p>
              <div className='board-tag'>
                <div className='solution'>
                  해결
                </div>
                <div className='hashtag'>
                #가죽지갑
                </div>
              </div>
            </div>
            <div className='boxFrame'>
              <div className='pictureFrame'>
                <img src='/img/test_img.jpg'></img>
              </div>
              <div className='board-title'>
                <h5>53. 국민은행 체크카드 민...</h5>
              </div>
              <hr/>
              <p><span className='border-writer'>지영84</span><span className='border-time'>12시간 전</span></p>
              <div className='board-tag'>
                <div className='unresolved'>
                  미해결
                </div>
                <div className='hashtag'>
                #체크카드
                </div>
              </div>
            </div>
            <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
            <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
            <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
        </div>
        <div className='item-list'>
          <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
            <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
            <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
            <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
            <div className='boxFrame'>
              <div className='pictureFrame'>
              </div>
              <h5>&nbsp;</h5>
              <hr/>
            </div>
        </div>
        <div className='item-list'>
            
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
  
  export default findIt;