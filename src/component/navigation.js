import './navigation.css';

function navigation() {
    return (
      <div id="navigation">
          <div className='logoFrame'>
              <div className='logo'>
                <img alt='logo img'></img>
                
              </div>
              <div className='find-please'>
                <span>찾아주세요&nbsp;</span>&nbsp;찾았어요
              </div>
          </div>
          <div className='loginFrame'>
              <div className='login-join'>
                로그인/회원가입
              </div>
          </div>
      </div>
    );
  }
  
  export default navigation;