// import Amsterdam from './assets/amsterdam.jpg'

/*
function App() {
  const divStyle = { border:'1px solid teal', padding: 5, margin: 5}
  const imgStyle = {  width: '50%'  }
  return (
    <div className="App">
      <div style={divStyle}>
          <h3>로컬 이미지</h3>
          <img src={Amsterdam} style={imgStyle} />
      </div>
      <div style={divStyle}>
          <h3>외부 이미지</h3>
          <img src="https://images.pexels.com/photos/270756/pexels-photo-270756.jpeg" style={imgStyle} />
      </div>
    </div>
  );
}
*/

/*
import Praha from './assets/praha.jpg'

function App() {
  return (
    <div className="App">
      <div style={{
        backgroundImage:`url(${Praha})`,
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <h3 style={{color: 'white'}}> 프라하(Praha) </h3>
        </div>
    </div>
  );
}
*/


/*
function App() {
  const bgStyle {
    backgroundImage:"url('https://images.pexels.com/photos/270756/pexels-photo-270756.jpeg')",
    height:'100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  return (
    <div className="App">
      <div style={bgStyle}>
        <h3> 로키 산맥 </h3>
        </div>
    </div>
  );
}

*/

/*
import { useState } from "react";

function App() {

  const [file, setFile] = useState(); // setFile

  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return ( // 파일을 선택하면 onChange 이벤트 발생
    <div className="App">
      <h3> 이미지 업로드하기 전 미리보기</h3>
      <input type="file" onChange={handleChange} /><br />
      <img width="50%" src={file} />
    </div>
  )
}
*/

import America from './assets/america.jpg'
import Amsterdam from './assets/amsterdam.jpg'
import Budapest from './assets/budapest.jpg'
import Italy from './assets/italy.jpg'
import Praha from './assets/praha.jpg'

function App() {

  const imgStyle = { width:'30%', padding: 2, margin: 2}

  /* return ( // margin: 0 auto 가운데정렬
    <div style={{ width:'100%', margin:'0 auto', padding:5  }}>
      <img src={Amsterdam} style={imgStyle} alt="" />
      <img src={America} style={imgStyle} alt="" />
      <img src={Budapest} style={imgStyle} alt="" />
      <img src={Italy} style={imgStyle} alt="" />
      <img src={Praha} style={imgStyle} alt="" />
    </div>
  ) */

  return ( 
    <div className='container'>
      <img src={Amsterdam} style={imgStyle} alt="" />
      <img src={America} style={imgStyle} alt="" />
      <img src={Budapest} style={imgStyle} alt="" />
      <img src={Italy} style={imgStyle} alt="" />
      <img src={Praha} style={imgStyle} alt="" />
    </div>
  )
}

export default App;
