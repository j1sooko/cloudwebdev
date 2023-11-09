function showResponse() { console.log("네, 만나서 반갑습니다.");}
function showMessage() { console.log("그동안 잘 지내셨죠?");}

/* function SayHello() {
    return (
        <>
            <p onDoubleClick={showResponse}>안녕하세요</p>
            <input type="button" value="확인" onClick={showMessage} />
        </>

    )
}

 */


const SayHello = () => {
    function handleEventClick(e) {
        // 실행할 코드
        console.log(e.target.name);
        console.log(e.target.textContent);
        console.log(e.target.innerText)
    }

    return (
        <div>
            <h3>Main</h3>
            <button name="btnOK" onClick={handleEventClick}>확인</button>
            <button name="btnCancel" onClick={handleEventClick}>취소</button>
            <div name="myName" style={{padding:10, backgroundColor:'teal'}}onClick={handleEventClick}>
                <h3>내 이름</h3>
                <p>I'm 윌리엄</p>
            </div>
        </div>
    )
}

export default SayHello;