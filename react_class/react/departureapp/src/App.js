import "./App.css";
import { useState } from "react";
/* 
function App() {
  const [departureTime, setDepartureTime] = useState(0);

  const alarm = () => {
    //  setDepartureTime(departureTime + 300);
    // alert("파리행 비행기 탑승 수속을 시작합니다."); 

    let newdepartureTime;
    (departureTime >= 300) ? (newdepartureTime = 0) : ( newdepartureTime = departureTime + 300)
    setDepartureTime(newdepartureTime);
    alert("파리행 비행기 탑승 수속을 시작합니다.");
  }

  return (
    <div className="App">
      <p>{departureTime / 60}분 후 탑승수속 시작</p>
      <button onClick={alarm}>탑승수속 시작 알림</button>
    </div>
  );
} */

/*
const insertData = () => {
  console.log("1,000,000개 데이터 행 추가");
  return [];
}


function App() {
  const [users, setUsers] = useState(() => {return insertData()});
  const [input_data, setInput_data] = useState('');

  const handleInputChange = (e) => {
    setInput_data(e.target.value);
  }

  const addUser = () => {
    setUsers((prevUsers) => {
      console.log("이전 users 데이터: ", prevUsers);
      return [input_data, ...prevUsers];
    })
  }

  return (
    <div className="App">
      <div>
        <input type="text" name="userName" value={input_data}
          onChange={handleInputChange}
          placeholder='추가할 사용자를 입력하세요.' />&nbsp;&nbsp;
          <button onClick={addUser}>사용자 추가</button>
          <hr />
          {
            users.map((user) => {
              return <p key={user}>{user}</p>
            })
          }
      </div>
    </div>
  );
}
*/

// 전 상태(previous State)를 반영한 업데이트

/* function App() {
   const [age, setAge] = useState(29);

  function increment() {
    setAge(a => a + 1);
  }

  return (
    <div className="App">
      <div>
        <h3>당신의 나이 : {age}</h3>
        <button onClick={() => { // queue에서 처리 됨
          increment(); 
          increment();
          increment();
          increment();
          increment();
        }}>현재 나이에 5를 더하기</button>
      </div>
    </div>
  );
}  */


// 초기 상태(initial state) 재생성 방지
function createInitailTodos() {
  const initialTodos = [];
  for (let i = 0; i < 2; i++) {
    initialTodos.push({
      id: i,
      text: "Item " + (i + 1),
    });
  }
  console.log("createInitialTodos 실행됨");
  return initialTodos;
}

function App() {
  // useState는 처음 시작시만 랜더링되고 그 이후에는 랜더링되지 않도록 함수 자체를 전달
  // const [todos, setTodos] = useState(createInitailTodos()); // X
  const [todos, setTodos] = useState(createInitailTodos); // O
  const [text, setText] = useState('');

  return (
    <div className="App">
      <div>
        <input value={text} onChange={e => setText(e.target.value)} />
        <button onClick={() => { 
          setText('');
          setTodos([{ id: todos.length, text: text }, ...todos]);}}>
            아이템 추가</button>
        <ul>
          {todos.map(item => (
            <li key={item.id}>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;
