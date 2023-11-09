import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import NaviggationLink from './components/NavigationLink';

function App() {
  return (
    <div className="App">
      <NaviggationLink />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
