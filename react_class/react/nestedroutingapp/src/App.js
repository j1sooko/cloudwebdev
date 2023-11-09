import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import User from './components/User'
import NotFound from './components/NotFound'
import Profile from './components/Profile'
import Account from './components/Account'
import Users from './components/Users';

function App() {
  const users = [
    {id: "1", user_name:'김아름'},
    {id: "2", user_name:'체르니'},
    {id: "3", user_name:'이재원'}
  ]
  
  return (
    <Router>
      <div className="App">
        <h3>중첩 라우팅</h3>          
        {/* <nav>
          <Link to="/home">홈</Link>
          <Link to="/users">사용자</Link>
        </nav> */}
        <ul className='nav'>
          <li><Link to="/home">홈</Link></li>
          <li><Link to="/users">사용자</Link></li>
        </ul>

        <Routes>
          <Route index elment={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users users={users} />}>
            <Route path=":User_id" element={<User />}>
              <Route path="profile" element={<Profile />} />
              <Route path="account" element={<Account />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
