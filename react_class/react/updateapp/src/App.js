import { useState } from 'react';
import './App.css';
import CountryBoard from './components/CountryBoard';

function App() {
  const initialState = [
    {id: 1, country: '캐나다'},
    {id: 2, country: '벨기에'},
    {id: 3, country: '헝가리'}
  ];

  // const [data, setDate] = useState(initialState);
  const [items, setItems] = useState(initialState);

  const onUpdate = (inputId, changeItem) => {
    const newItems = items.map(item => {
      if (item.id === inputId) {
        return {...item, country: changeItem};
      }
      return item;
    })
    setItems(newItems);
    console.log('newItems', newItems);
  }

  return (
    <div className="App">
      <CountryBoard items={items} onUpdate={onUpdate} />
    </div>
  );
}

  /* const updateState = () => {
    const newState = data.map(item => {
      if (item.id === 2) {
        return {...item, country:'한국'};
      }
      return item;
    })
    setDate(newState);
  } */

 /*  return (
    <div className="App">
      <button onClick={updateState}>업데이트</button>
      {
        data.map(item => {
          return (
            <div key={item.id}>
              <h3> 아이디: {item.id}</h3>
              <h3> 나라: {item.country} </h3>
              <hr />
            </div>
          )
        })
      }
    </div>
  ); */

export default App;
