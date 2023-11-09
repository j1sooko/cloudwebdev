import { useState, useRef, useEffect } from "react";

function SetIntervalComp({message}) {
    const [fontSizeState, setFontSizeState] = useState(10);
    const fontRef = useRef(10);

    useEffect( () => {
        setInterval( () => {
        setFontSizeState(fontRef.current += 2);
    }, 1000) // 1초마다 폰트사이즈 증가
    })

   /*  setInterval( () => {
        setFontSizeState(fontSizeState + 2);
    }, 1000) // 1초마다 폰트사이즈 증가 */
    

    return (
        <>
            <div style={{
                fontSize: fontSizeState,
                backgroundColor: 'teal',
                color: 'white'
            }}>message</div>
            
        </>
    )
}

export default SetIntervalComp;