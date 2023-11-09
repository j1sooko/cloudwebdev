import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: 0 };

export const counterSlice = createSlice({
    //name은 각 action에 대한 prefix
    // A name, used in action types
    name: "counter",
    // The initial state for the reducer
    initialState,
    // An object of "case reducers". Key names will be used to generate actions.
    reducers: {
        increment: (state) => { state.value += 1; },
        decrement: (state) => { state.value -= 1; }
    }
})

// actions - dispatch할 때 액션을 전달해 상태를 어떻게 변화시킬지를 결정
// dispatch: action(상태 state를 변경)을 실행하는 것
export const { increment, decrement } = counterSlice.actions;

// reducer
export default counterSlice.reducer;