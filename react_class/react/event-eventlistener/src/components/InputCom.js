/* import _debounce from "debounce";

function InputCom() {
    return (
        <div>
            <label htmlFor="clientName">고객명: </label>
            <input type="text" name="clientNmae"
            placeholder="고객이름을 입력하세요."
            onChange={_debounce((e)=>{ console.log(e.target.value)}, 3000)} />
        </div>
    ); // debounce -> 3000ms 이후 onChange Event를 보냄
} */

import { throttle } from "throttle-debounce";

function InputCom() {

    const onbtnClick = throttle(3000, (e) => {
        console.log('검색 요청');
    })
    return (
        <div>
            <label htmlFor="clientName">고객명: </label>
            <input type="text" name="clientNmae" placeholder="고객이름을 입력하세요."/>
            <button onClick={onbtnClick}>검색</button>
        </div>
    ); // debounce -> 3000ms 이후 onChange Event를 보냄
} 


export default InputCom;