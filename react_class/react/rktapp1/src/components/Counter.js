import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/counter";
import React from "react";


const Counter = () => {
    // useSelector를 통해 redux store에서 특정 값을 관찰
    const count = useSelector((state) => state.counter.value);

    const dispatch = useDispatch();

    const handleIncrement = () => dispatch(increment());
    const handleDecrement = () => dispatch(decrement());

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>증가</button>
            <button onClick={handleDecrement}>감소</button>
        </div>
    )
}

export default Counter;