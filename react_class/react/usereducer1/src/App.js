import './App.css';
import Counter from './components/Counter';
import ManageInputs from './components/ManageInputs';
import { useReducer } from 'react';

const initialState = {
  text: "",
  isUpperCase: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text
      };
      case 'TOGGLE_UPPER_CASE':
        return {
          ...state,
          text: state.text.toUpperCase()
        };
      case 'LOWERCASE':
        return {
          ...state,
          text: state.text.toLowerCase()
        };
      default:
        return state;  
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => {
    dispatch({ type: 'SET_TEXT', text: event.target.value });
  };

  const handleToggleUpperCase = () => {
    dispatch({ type: 'TOGGLE_UPPER_CASE' });
  };

  const handleLowerCase = () => {
    dispatch({ type: 'LOWERCASE' });
  };

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ManageInputs /> */}
      <input type="text" value={state.text} onChange={handleChange} />
      <button onClick={handleToggleUpperCase}>대문자로 나타내기</button>
      <button onClick={handleLowerCase}>소문자로 나타내기</button>
    </div>
  );
}

export default App;
