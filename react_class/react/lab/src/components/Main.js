import Cat from '../assets/cat.jpg'
import Dog from '../assets/dog.jpg'

const Main = () => {
    const imgStyle = { 
      width:'40%', 
      padding: 10,
      margin: 2,
      marginBottom: 10,
      marginTop: 80
    }

    return ( 
      <div className='container'>
        <img src={Cat} style={imgStyle} alt="" />
        <img src={Dog} style={imgStyle} alt="" />
      </div>
    )
  }

  export default Main;