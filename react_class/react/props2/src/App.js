import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'

function App() {
  const greeting = {
    title:'리액트(React)',
    description:"리액트(react)는 리액트 자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용"
  
  }
  return (
    <div className="App">
      <Greet {...greeting} />
    </div>
  );
}

export default App;
