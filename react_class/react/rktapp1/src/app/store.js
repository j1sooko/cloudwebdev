import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../redux/counter';

//리덕스 스토어
export const store = configureStore({
    reducer: {
        counter: counterReducer // counterSlice에서 name으로 정의한 'counter'인 듯?
    }
})