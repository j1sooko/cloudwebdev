import './App.css';
import InputCom from './components/InputCom';
import SayHello from './components/SayHello';

function handleEventClick() {
  alert('h1 엘리먼트를 클릭하셨습니다.');
}


function App() {
  return (
    <div className="App">
      {/* <SayHello /> */}
      <InputCom />
      <h1 onClick={handleEventClick}>Main</h1>
    </div>
  );
}

export default App;
