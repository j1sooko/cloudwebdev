import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';

/* const Person = () => {
  return (
    <div>
      <h1>Name : 고지수</h1>
      <h2>Email : 20190936@dongduk.ac.kr</h2>
      <h2>Age : 22</h2>
    </div>
  )
} */

/* function Header() {
  const h1style = {
    border: '1px solid teal',
    backgroundColor: 'teal',
    color: 'white',
    marginBottom: 10
  }
  return (
    <h1 style={h1style}>Header</h1>
  );
} */

/* function Main() {
  const mainstyle = {
    border: '2px solid green',
    marginBottom: 10
  }
  return (
    <h1 style={mainstyle}>Main</h1>
  );
} */


/* function Footer() {
  const h1style = {
    border: '1px solid teal',
    backgroundColor: 'teal',
    color: 'white',
  }
  return (
    <h1 style={h1style}>Footer</h1>
  );
} */



function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
