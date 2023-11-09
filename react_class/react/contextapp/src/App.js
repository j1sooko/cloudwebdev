import { createContext } from 'react';
import './App.css';
import Main from './components/Main';

export const UserContext = createContext(); // 기본값 설정 x

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
