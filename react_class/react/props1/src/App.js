import './App.css';
import Person from "./components/Person"


function App() {
  return (
    <div className="App">
      <Person name={"윌리엄"} email={'w@gmail.com'} age={40} />
      <Person name={"채봉구"} email={'bamby@gmail.com'} age={20} />
      <Person name={"남예준"} email={'nyj@gmail.com'} age={21} />
    </div>
  );
}

export default App;
