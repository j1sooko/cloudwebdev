import { useCallback, useState } from 'react';
import './App.css';
import AverageComp from './components/AverageComp';

const fn_count = new Set(); // 함수 count를 셈, Set: 중복 허락x

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  // 변경 전
/*   const incrementCount = () => { setCount(count + 1)};
  const decrementCount = () => { setCount(count - 1)};
  const incrementNumber = () => { setNumber(number + 1)}; */


  // 변경 후
  const incrementCount = useCallback(() => { setCount(count + 1)}, [count] );
  const decrementCount = useCallback(() => { setCount(count - 1)}, [count] );
  const incrementNumber = useCallback(() => { setNumber(number + 1)}, [number] );

  
  fn_count.add(incrementCount);
  fn_count.add(decrementCount);
  fn_count.add(incrementNumber);
  alert(fn_count.size); // 3 -> 6 -> 9 (두개씩 뜰 시 index.js의 <React.StrictMode> 주석처리)
                        // 변경 후 count 관련 실행시 2씩 증가, number 관련 실행시 1씩 증가
  return (
    <div className="App">
      {/* <AverageComp /> */}
      <div style={{backgroundColor:'teal', color:'white', padding:10}}>
        <h3>Count: {count}</h3>
        <button onClick={incrementCount}>count 증가</button>
        <button onClick={decrementCount}>count 감소</button>
        <button onClick={incrementNumber}>number 증가</button>

      </div>
    </div>
  );
}

export default App;
