import { useReducer } from "react";

function reducer(state, action) {
    console.log(state);
    console.log(action);

    return {
        ...state,
        [action.name]:action.value
    }
}

const ManageInputs = () => {
    const [state, dispatch] = useReducer(reducer, {
        name:'',
        passwd:''
    })
    const {name, passwd} = state;
    const onChange = (e) => { dispatch(e.target) } // 이벤트 객체(e)를 이용해서 target 값 자체를 action 값으로 사용

    return (
        <div>
            <div>
                <input name='name' value={name} onChange={onChange} />
                <input name='passwd' value={passwd} onChange={onChange} />
            </div>
            <div>
                <p>이름: {name}</p>
                <p>비밀번호: {passwd}</p>
            </div>
        </div>
    )
}

export default ManageInputs;
