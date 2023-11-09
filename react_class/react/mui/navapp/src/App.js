import './App.css';
import Home from './components/Home';
import Blog from './components/Blog';
import Register from './components/Register';
import LoginForm from './components/LoginForm';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import FindPassword from './components/FindPassword'

function App() {
/*   const [data, setData] = useState(null);

  const btnClick = async () => {
    let url='https://newsapi.org/v2/top-headlines?country=kr&apiKey=3029208a79894850854dd325679b261b'
    try {
      const response = await axios.get(url);
      setData(response.data);
      console.log(response);
    } catch(e) { console.log('에러', e); }
  } */

  return (
    <div className="App">
      <ResponsiveAppBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/news' element={<NewsList />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<Register />} />
          <Route path="/findpasswd" element={<FindPassword />} />
        </Routes>
        {/* <button onClick={btnClick}>뉴스 가져오기</button>
        {data && <div>{JSON.stringify(data, null, 2)}</div>}
 */}
    </div>
  );
}

export default App;
