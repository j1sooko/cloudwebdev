const Person = (props) => { // person component
    return (
      <>
        <h1>{props.name}</h1>
        <h1>{props.email}</h1>
        <h1>{props.age}</h1>
      </>
    )
  }

  export default Person;