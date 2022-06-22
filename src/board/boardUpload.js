import './boardUpload.css';

function boardUpload() {
    return (
      <div id="boardUpload">
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
            <img src='/img/test_img.jpg'></img>

          </div>

          
        </div>
        <div className='board-hash'>
              <h5>#해시태그</h5>
              <div className='board-hashtags'>
                <div className='board-hashtag'>#멀티태그</div>
                <div className='board-hashtag'>#멀티태그</div>
                <div className='board-hashtag-empty'></div>
                <div className='board-hashtag-empty'></div>
                <div className='board-hashtag-empty'></div>
                <br/>
                
                </div>
                <div className='board-hashtags last-tags'>
                <div className='board-hashtag'>#멀티태그</div>
                <div className='board-hashtag'>#멀티태그</div>
                <div className='board-hashtag-empty'></div>
                <div className='board-hashtag-empty'></div>
                <div className='board-hashtag-empty'></div>
                <br/>
                
                </div>
              <hr></hr>
              <div>
              <div className='title'><p>제목</p><span style={{color:"#12DB64", marginRight:"10%"}}>*</span> <input placeholder='제목을 작성해주세요' type="text"></input></div>

              <div className='content'><p>내용</p><span style={{color:"#12DB64", marginRight:"10%"}}>*</span><textarea placeholder='내용을 작성해주세요'></textarea></div>
              

              </div>
              <button>작성완료</button>
          </div>

         
      </div>
    );
  }
  
  export default boardUpload;