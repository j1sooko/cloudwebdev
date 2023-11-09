import { useState, useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "Increase":
            return {value: state.value + 1};
        case "Decrease":
            return {value: state.value - 1};
        default:
            return state;

    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, {value: 0});
    const divStyle = { margin: 10, padding: 5, backgroundColor: 'teal', color: 'white'};
    const buttonSytle = { marginRight: 5 };

    return (
        <div style={divStyle}>
            <p> 카운트(Count) : {state.value} </p>
            <button style={buttonSytle}
                onClick={ () => dispatch({type:'Increase'})}> 1 증가</button>
            <button style={buttonSytle}
                onClick={ () => dispatch({type:'Decrease'})}> 1 감소</button>
        </div>
    )

}

export default Counter;