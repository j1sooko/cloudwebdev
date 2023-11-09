import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    customer_id:"",
    email:""
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const moveToCustomer = () => { // useNavigate()를 이용하여 전달할 데이터 정의
    navigate('/customer', {
      state: {
        customer_id:values.customer_id,
        email:values.email
      }
    })
  }

  return (
    <div className="App">
      <input type="text" name="customer_id" value={values.customer_id}
        placeholder='고객 아이디' onChange={handleChange} /> <br />
      <input type="text" name="email" value={values.email}
        placeholder='이메일' onChange={handleChange} />
      <button onClick={moveToCustomer}>고객(customer) 페이지로 이동</button>
    </div>
  );
}

const Customer = () => { // useLocation() hook을 이용해서 location에서 전달받은 데이터 얻기
  const location = useLocation();
  const customer_id = location.state.customer_id;
  const email = location.state.email;

  return (
    <div>
      <h3>Home 페이지로부터 전달받은 데이터</h3>
      <p>customer_id : {customer_id}</p>
      <p>email : {email}</p>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/customer" element={<Customer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
