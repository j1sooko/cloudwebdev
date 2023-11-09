import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const pstyle = {
  color: 'white',
  backgroundColor: 'teal'
}

// const insertElement = <p style={pstyle}>JSX를 이용한 새로운 element 추가</p>

/*
let number1 = 20;
let number2 = 5;
const insertElement = <p>두 수 {number1}과 {number2}의 합: {number1 + number2}</p>
*/

// var current_time = new Date().toTimeString();
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div>
//     <p>현재 시간: {current_time}</p>
//   </div>
// )

function getCurrentTime() {
  return new Date().toTimeString();
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <p>현재시간2: <span className="span">{getCurrentTime()}</span></p>
// );


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <div>
//     <h1>React 애플리케이션 개발</h1>
//     <p>React 애플리케이션을 만들기 위해서는 ...</p>  
//   </div>
// )




// const insertElement = <Fragment>
//   <h1>React 애플리케이션 개발</h1>
//   <p>React 애플리케이션을 만들기 위해서는 ...2</p>
// </Fragment>


const insertElement = <>
  <h1>MERN 스택</h1>
  <ul>
    <ol> MongoDN </ol>
    <ol> Express.js </ol>
    <ol> React.js </ol>
    <ol> Node.js </ol>
  </ul>
</>


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  insertElement
);



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   insertElement
//   // <React.StrictMode>
    
//   //   {/* <App /> */}
//   // </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
