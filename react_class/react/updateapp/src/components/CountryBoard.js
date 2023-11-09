import CountryItem from "./CountryItem";
import { useState } from 'react';

function CountryBoard({items, onUpdate}) {
    const [inputVal, setInputVal] = useState("")

    const inputOnChange = (e) => { setInputVal(e.target.value); }
    let updateData = inputVal;

    console.log(items);

    return (
        <div>
            <h1> 국가 목록</h1>
            <div>
                <input type="text" value={inputVal} onChange={inputOnChange} />
            </div>
            <hr />
            {
                items.map((item, index) => {
                    return (
                        <div key={index}>
                            <CountryItem item={item} onUpdate={onUpdate} updateData={updateData} />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default CountryBoard;