import './App.css';
import AddItem from './components/AddItem';
import TodoBoard from './components/TodoBoard';
import { useState } from 'react';

function App() {
  //  update를 위한 id 초기값 설정
  const initialState = [
    {id: 1, todo: '책 읽기'},
    {id: 2, todo: '산책하기'}
  ]

  const [todoList, setTodoList] = useState(initialState);
  const [inputValue, setInputValue] = useState(""); // update를 위한 입력 값
  /* const [inputVal, setInputVal] = useState("")

  const inputOnChange = (e) => {
    console.log(e.target.value);
    setInputVal(e.target.value);
  }

  const AddItem = () => {
    setTodoList([...todoList, inputVal]);
    // setTodoList([inputVal, ...todoList]);
  } */

  const onCreate = ({id, todo}) => { // App에 있는 이유가 todoList가 App에 있으니까?
    const newItem = {id, todo};
    console.log("onCreate content: " + typeof(newItem) + ", " + newItem);
    setTodoList([...todoList, newItem]);
  }

  const onDelete = (content) => {
    console.log("onDelete content: " + typeof(content) + ", " + content);
    setTodoList(todoList.filter((item) => item !== content))
  }

  // onUpdate 추가, return 수정
  const onUpdate = (inputId, changeItem) => {
    console.log(inputId);
    const newTodos = todoList.map(item => {
      if (item.id === inputId) {
        return {...item, todo: changeItem};
      }
      return item;
    })
    setTodoList(newTodos);
  }

  return (
    <div className="App">
        <AddItem onCreate={onCreate} inputValue={inputValue} change={setInputValue}/>
        {/* <input type="text" value={inputVal} onChange={inputOnChange} />
        <button onClick={AddItem}>할 일 추가</button> */}
      <div>
        <TodoBoard todoList={todoList} onDelete={onDelete} 
          onUpdate={onUpdate} inputValue={inputValue}/>
      </div>
    </div>
  );
}

export default App;
