import { useState, useRef } from "react";

const insertData = () => {
  console.log("1,000,000개 데이터 행 추가");
  return [];
};

function AddMember() {
    console.log('AddMember 컴포넌트 실행됨'); // 이벤트가 발생됨으로써 무수히 많이 실행됨
    const refuserName = useRef();
  const [users, setUsers] = useState(() => {
    return insertData();
  });
  const [input_data, setInput_data] = useState("");

  const handleInputChange = (e) => {
    setInput_data(e.target.value);
  };

  const addUser = () => {
    setUsers((prevUsers) => {
      console.log("이전 users 데이터: ", prevUsers);
      return [input_data, ...prevUsers];
    });
    setInput_data('');
    refuserName.current.focus()
  };

  return (
    <div style={{padding:10}}>
      <div>
        <input type="text" name="userName" value={input_data}
          onChange={handleInputChange} placeholder="추가할 사용자를 입력하세요."
          ref={refuserName}/>&nbsp;&nbsp;
        <button onClick={addUser}>사용자 추가</button>
        <hr />
        {users.map((user) => {
          return <p key={user}>{user}</p>;
        })}
      </div>
    </div>
  );
}

export default AddMember;
