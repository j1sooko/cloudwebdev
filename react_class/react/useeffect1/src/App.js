import './App.css';
import { useState, useEffect } from 'react';
import SideEffectComp from './components/SideEffectComp';
import SetIntervalComp from './components/SetIntervalComp';

// function App() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   /* useEffect( () => {
//     console.log("렌더링 완료");
//     console.log(`이메일: ${email}, 비밀번호: ${password}`);
//   }) */

//   // 처음 마운트할 때만 실행
// /*   useEffect( () => {
//     console.log("처음 마운트될 때만 실행");
//     // console.log(`이메일: ${email}, 비밀번호: ${password}`);
//   }, []); // []는 dependencies */


//   // 특정 값에 변화가 있을 때만 실행
//   useEffect( () => {
//     console.log(password, email);
//   }, [password, email]);

//   const inputStyle = { margin: 5 }

//   const changeEmail = (e) => {
//     setEmail(e.target.value);
//   }

//   const changePassword = (e) => {
//     setPassword(e.target.value);
//   }

//   return (
//     <div className="App">
//       <input style={inputStyle} type="email" value={email} onChange={changeEmail} />
//       <input style={inputStyle} type="password" value={password} onChange={changePassword} />
//       <hr />
//       <div>
//         <span>이메일: {email}</span> <br />
//         <span>패스워드: {password}</span>
//       </div>
//     </div>
//   );
// }



// side effects
function App() {
  let message = 'React 프로그램';

  return (
    <div className="App">
      {/* <SideEffectComp message={message} /> */}
      <SetIntervalComp message={message}/>
    </div>
  );
}

export default App;
