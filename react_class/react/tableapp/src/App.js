import './App.css';

const member = [
  { name: "김창수", age: 32, gender: "남성", email: "cskim@naver.com"},
  { name: "이지수", age: 21, gender: "여성", email: "jslee@naver.com"},
  { name: "박성희", age: 25, gender: "여성", email: "shpark@naver.com"},
  { name: "이재원", age: 22, gender: "남성", email: "jwlee@naver.com"}
]

function App() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>성별</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
        {
          member.map((val, key)=> {
            return (
              <tr key = {key}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
                <td>{val.email}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
