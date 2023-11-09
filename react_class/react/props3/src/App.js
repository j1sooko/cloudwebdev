import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import dogimg from './assets/dog.jpg';

const PassingComponents = () => {
  const divstyle = { paddingLeft: 10 }
  const imgstyle = { width:'25%' }
  return (
    <>
      <h1>컴포넌트 전달</h1>
      <div style={divstyle}>
        <h3>강아지</h3>
        <img style={imgstyle} src={dogimg} alt='갱얼쥐' />
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <PassingComponents />
      </Main>
    </div>
  );
}

export default App;
