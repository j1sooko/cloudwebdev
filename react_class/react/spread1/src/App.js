import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  const newProps = {
    title: '오펜하이머',
    genre: '스릴러/드라마',
    release_date: '2023.08.15',
    rating:'7.3',
    movie_length: '180분'
  }

  return (
    <div className="App">
     <Header />
     <Main {...newProps} />
     <Footer />
    </div>
  );
}

export default App;
