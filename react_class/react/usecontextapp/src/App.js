import './App.css';
import { createContext, useContext } from 'react';

const UserContext = createContext('NoName');

function Header() {
  return (
    <div style={{backgroundColor:'lime', padding:'10px'}}>
      <UserInfo />
    </div>
  )
}

function UserInfo() {
  const userName = useContext(UserContext); // 컨텍스트 데이터에 액세스
  return <div style={{backgroundColor:'#1b5e20'}}>{userName}</div>
}

function Main() {
  const userName = useContext(UserContext);
  return <div style={{backgroundColor:'indigo'}}>{userName}</div>
}

function App() {
  const userName = '김창수';

  return (
    <UserContext.Provider value={userName}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </UserContext.Provider>
  );
}

export default App;
