import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/* const name = "윌리엄";
var current_time = new Date().toTimeString();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>안녕하세요. {name}님</h1>
    {
      name === "윌리엄" ? (
        <div>
          <p> 만나서 반갑습니다. </p>
          <p> {current_time}</p>
        </div>
        ) : (
          <div>
          <p> 새로운 멤버가 되신 것을 환영합니다. </p>
          <p> {current_time}</p>
        </div>
        )
    }
  </>
); */


// if문(AND 연산자) 사용
// const customerName = '고지수'
// const isFemale = true

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     {isFemale && <p> 고객명: {customerName}</p>}
//   </>
//   // <>
//   // (!(isFemale) && <p> 고객명: {customerName}</p>)
//   // </>
// )


// OR 연산자 사용
const customerName = '고지수'
const customerID = undefined

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {typeof(customerName)}
    {<br></br>}
    {typeof(customerID)}
    {/* {customerId} */}
    {/* {customerID && <p>고객명: {customerName}</p>} */}
    {/* {customerID || <p>고객명: {customerName}</p> } */}
    {customerID === undefined && <p>고객명: {customerName}</p>}
  </>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
