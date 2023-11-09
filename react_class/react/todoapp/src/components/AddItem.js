import { useState } from "react";
import '../AddItem.css';
import { v4 as uuidv4 } from 'uuid'; 

const AddItem = ({onCreate, change}) => { // change: App.js의 setInputValue()
    // const [inputVal, setInputVal] = useState("")
    const [inputs, setInputs] = useState({
        id: '',
        todo: ''
    })

    const inputOnChange = (e) => {
        // console.log(e.target.value);
        // setInputVal(e.target.value);
        setInputs({
            ...inputs,
            id: uuidv4(),
            todo: e.target.value
        })
        change(e.target.value); // update를 위해 입력값 state 설정
    }

    const onSubmit = () => {
        onCreate(inputs);
        setInputs({id: '', todo: ''});
    }

    return (
        <div>
            <input type="text" name="todo" value={inputs.todo} onChange={inputOnChange}  />
            <button onClick={onSubmit}>할 일 추가</button>
        </div>
    )
}



  export default AddItem;