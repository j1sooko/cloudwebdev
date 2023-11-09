// import styles from './App.module.css';
import styled from 'styled-components';
import Button from './Button';
import './my-compstyle.scss'

const ContainerDiv = styled.div`
  width: 96%;
  margin: 0 auto;
  background: teal;
`;

const PComp = styled.p`
  color: white;
`
// 1. key로 접근 2. 속성으로 접근
function App() {
  /* return (
    <div className={styles['container']}>
      <h1 className={styles.heading}>React 프로그래밍</h1>
    </div>
  ); */

  /* return (
    <ContainerDiv>
      <PComp>React 프로그래밍</PComp>
    </ContainerDiv>
  ) */

 /*  return (
    <div className='App'>
      <Button bg='orange'>확인</Button>
      <Button bg='indigo'>확인</Button>
    </div>
  ) */

  return (
    <div className='container'>
      <div className='tealTopBottom'>Header</div>
      <div className='grayMain'>Main</div>
      <div className='tealTopBottom'>Footer</div>
    </div>
  )
}

export default App;
