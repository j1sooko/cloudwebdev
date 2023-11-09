import { useState, useMemo } from "react";

const getAverage = (numbers) => { // 입력될때마다 평균이 계산됨
    console.log("평균 계산");
    if (numbers.length === 0) return 0;
    const total = numbers.reduce( (a, b) => a + b); // numbers로 넘어온 데이터의 합
    return total / numbers.length;
}

function AverageComp() {
    const [numberList, setNumberList] = useState([]);
    const [numberValue, setNumberValue] = useState([]);

    const onChange = (e) => {
        setNumberValue(e.target.value);
    }

    const onInsert = e => { 
        const nextList = numberList.concat(parseInt(numberValue));
        setNumberList(nextList);
        setNumberValue('');
    }


    // 입력될때마다 평균이 계산되는 문제 해결
    const cal_avg = useMemo(() => getAverage(numberList), [numberList]);

    return (
        <div>
            <input style={{marginRight: 5}} value={numberValue} onChange={onChange} />
            <button onClick={onInsert}>값 등록</button>
            <hr />
            <ul>
                {
                    numberList.map((value, idx) => {
                        <li key={idx}>입력된 값 : {value}</li>
                    })
                }
            </ul>
            <hr /> 
            <p>평균(average) : {cal_avg}</p>
            <p>평균(average) : {cal_avg}</p>
            <p>평균(average) : {cal_avg}</p>
        </div>
    )

}

export default AverageComp;

