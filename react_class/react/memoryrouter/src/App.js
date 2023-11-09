import './App.css';
// import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoPage from './components/NoPage';
import Layout from './components/Layout';
import queryString from 'query-string';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         {/* <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//         </ul> */}
//         <Routes>
//           <Route path="/" element={<Layout />} />
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="*" element={<NoPage />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }


/* function App() {
  const queryParams = new URLSearchParams(window.location.search)
  const term = queryParams.get("term");
  const location = queryParams.get("location")


  return (
    <div className="App">
      <div>
        <p>queryParams: {queryParams}</p>
        <p>term: {term}</p>
        <p>location: {location}</p>
      </div>
    </div>
  );
} */

function App() {
  const queryParams = queryString.parse(window.location.search)

  return (
    <div className="App">
      <div>
        <p>queryParams: <pre>{JSON.stringify(queryParams, null, 2)}</pre></p>
        <p>term: {queryParams.term}</p>
        <p>location: {queryParams.location}</p>
      </div>
    </div>
  );
}
export default App;
