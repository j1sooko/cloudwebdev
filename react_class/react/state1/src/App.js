import './App.css';
import CheckBox from './components/CheckBox';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';
import TextareaComp from './components/TextareaComp';

/* function App() {
  const [checked, setChecked] = useState(false);
  const handleChange = () => { setChecked(!checked)}
  return (
    <div className="App">
      <Header />
      <Main />
      <label>
        <input type="checkbox" value="서울" checked={checked} onChange={handleChange} />서울
      </label>
      <p>"서울" 선택 여부 : {checked.toString()}</p>
    </div>
  );
} */

/* function App() {
  const [checkedSeoul, setCheckedSeoul] = useState(false);
  const [checkedParis, setCheckedParis] = useState(false);
  const handleChange = (e) => { 
    if (e.target.value === chkval[0])
      setCheckedSeoul(!checkedSeoul);
    if (e.target.value === chkval[1])
    setCheckedParis(!checkedParis);
  }
  const chkval  = ["서울", "파리"];
  return (
    <>
      <div className="App">
        <CheckBox label={chkval[0]} ischecked={checkedSeoul} onChange={handleChange} />
        <CheckBox label={chkval[1]} ischecked={checkedParis} onChange={handleChange} />
        <p> {chkval[0]} 선택 여부 : {checkedSeoul.toString()}</p>
        <p> {chkval[1]} 선택 여부 : {checkedParis.toString()}</p>
      </div>
      <TextareaComp />
    </>
  ); */

  function App() {
    const selectList = ["서울", "취리히", "파리", "베네치아", "뉴욕"];
    const [Selected, setSelected] = useState("");
    const handleSelect = (e) => { 
      setSelected(e.target.value);
    }
    const chkval  = ["서울", "파리"];
    return (
      <>
        <div className="App">
          <select onChange={handleSelect} value={Selected}>
            {selectList.map((item) => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
          <hr />
          <p> 선택됨: <strong>{Selected}</strong></p>
        </div>
      </>
    );
}
export default App;
