import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import NoPage from './components/NoPage';

// React Router V5까지는 <Redirect /> 컴포넌트 사용
function App() {
  // const isLogin = true;
  const isLogin = false;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={isLogin ? (<Home />) : (<Navigate to={"/login"} />)} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/redirect" element={<Navigate to='/login' />} /> */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
