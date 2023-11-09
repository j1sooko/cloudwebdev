import logo from './logo.svg';
import './App.css';

/* function App() {
  const seasons = ['봄', '여름', '가을', '겨울'];
  let seasonlist = [];

  seasons.forEach((item, index) => { // 두 개의 매개변수 활용. index: 선택적 매개변수, 각 요소의 순서를 나타내는 인덱스
    seasonlist.push(<li key={index} > {item}</li>)
  })

  return (
    <div>
      <h3>계절</h3>
      <ul>{seasonlist}</ul>
    </div>
  );
} */


/* function App() {
  const seasons = ['봄', '여름', '가을', '겨울'];

  return (
    <div>
      <h3>계절</h3>
      <ul>
        { seasons.map((item, index) => {
          return <li key={index}>{item}</li> // *** return value
        })}
      </ul>
    </div>
  )
} */


// 
// function App() {
//   let bucket_list = [{id:1, action:"책 만들기"}, 
//   {id:2, action:"가족사진 찍기"}, 
//   {id:3, action:"일본여행 가기"}, 
//   {id:4, action:"몽골 밤하늘 보기"}];

//   return (
//     <div>
//       <h3>나의 버킷리스트</h3>
//       {/* key 값 필요 */}
//       <ul>{bucket_list.map((item) => <li key={item.id}>{item.action}</li>)}</ul>
//     </div>
//   )
// }


function App() {
  let bucket_list = [{id:0, action:"책 만들기", keyword:"책"}, 
  {id:1, action:"가족사진 찍기", keyword:"가족사진"}, 
  {id:2, action:"일본 여행 가기", keyword:"여행"}, 
  {id:3, action:"몽골 밤하늘 보기", keyword:"여행"},
  {id:4, action:"글램핑 가기", keyword:"여행"},
  {id:5, action:"하이디라오 가기", keyword:"하이디라오"},
];

const filterd_bucket_list = bucket_list.filter((item) => item.keyword==="여행");
  return (
    <div>
      <h3>나의 버킷리스트</h3>
      <h4>키워드: {filterd_bucket_list[0].keyword}</h4>
      <ul>{filterd_bucket_list.map((item) => <li key={item.id}>{item.action}</li>)}</ul>
    </div>
  )
}

export default App;
