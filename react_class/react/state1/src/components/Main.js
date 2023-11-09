import { useState } from "react";

function Main() {
  const mainstyle = {
    border: "2px solid green",
    mrginTop: 0,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0,
  };

  /* const buttonStyle = { margin: 5 }
    const [count, setCount] = useState(0);
    const onIncrease = () => { setCount(count + 1); }
    const onDecrease = () => { setCount(count - 1); }
    return (
        <div style={mainstyle}>
            <h1>Main</h1>
            <p>카운트 : {count}</p>
            <button style={buttonStyle} name='btnIncreate' onClick={onIncrease}>증가</button>
            <button style={buttonStyle} name='btnDecreate' onClick={onDecrease}>감소</button>
        </div>

    ) */

  /* const buttonStyle = { margin: 5 }
    const [user_id, setUser_id] = useState('');
    
    const onChange = (e) => { setUser_id(e.target.value); }
    const onReset = () => { setUser_id(' '); }
    return (
        <div style={mainstyle}>
            <h1>Main</h1>
            <input name='user_id' onChange={onChange} value={user_id} />
            <button style={buttonStyle} name='btnReset' onClick={onReset}>초기화</button>
            <div>user_id : {user_id}</div>
        </div>

    ) */

  const buttonStyle = { margin: 5 };
  const [inputs, setInputs] = useState({
    user_id: "",
    user_pw: "",
  });

  const { user_id, user_pw } = inputs;

  const onChange = (e) => {
    console.log(e.target);

    const { value, name } = e.target; // name, value를 얻기

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      user_id: "",
      user_pw: "",
    });
  };

  return (
    <div style={mainstyle}>
      <h1>Main</h1>
      <input name='user_id' placeholder="아이디" onChange={onChange} value={user_id} /><br />
      <input name='user_pw' placeholder="비밀번호" onChange={onChange} value={user_pw} /><br />
      <button style={buttonStyle} name='btnReset' onClick={onReset}>초기화</button>
      <div>user_id : {user_id} user_pw : {user_pw}</div>
    </div>
  );
}

export default Main;
