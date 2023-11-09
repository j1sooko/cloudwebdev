import './App.css';
import AddMember from './components/AddMember';
import { useState, useRef, useEffect } from 'react';

function App() {
  console.log('App rendering');
  const [input_data, setInput_data] = useState("");
  const count = useRef(1); //const count = {current:0} count.current = 0
  // react 컴포넌트가 렌더링될 때마다 특정 작업을 진행하도록 할 때 사용
  useEffect(() => {
    count.current = count.current + 1;
  })

  return (
    <>
      <input type="text" name="userName" value={input_data}
          onChange={(e) => setInput_data(e.target.value)}
          />&nbsp;&nbsp;
      <h1>렌더링 횟수: {count.current}  </h1>
    </>
    // <div className="App">
    //   {/* <AddMember /> */}
    // </div>
  );
}

export default App;
