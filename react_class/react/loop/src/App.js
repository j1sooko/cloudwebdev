

/* function App() {
  const fruits = ['Apple', 'Banana', 'Peach', 'Strawberry'];
  const rendering_Fuits = () => {
    let stored_fruits = []
    for (let i = 0; i < fruits.length; i++)
      stored_fruits.push(<li key={i}>{fruits[i]}</li>)
    return stored_fruits;
  }

  return (
    <div>
      <h3>과일</h3>
      <ul>{rendering_Fuits()}</ul>
   </div>
  );
}
 */

function App() {
  const animals = [ // object 배열
    { id: 1, animal: "강아지"},
    { id: 2, animal: "새"},
    { id: 3, animal: "고양이"},
    { id: 4, animal: "햄스터"},
  ];

  const getPets = (animals) => {
    let pets = [];

    // for in 사용
    /* for (let idx in animals) { // idx <- 0, 1, 2, 3
      const item = animals[idx];
      // console.log(idx);
      pets.push(<li key={item.id}>{item.animal}</li>)
    } */

    // for of 사용
    for (let item of animals)
      pets.push(<li key={item.id}>{item.animal}</li>)
    return pets;
  }

  return (
    <div>
      <h3>애완동물</h3>
      <ul>{getPets(animals)}</ul>
    </div>
  )
}


export default App;
