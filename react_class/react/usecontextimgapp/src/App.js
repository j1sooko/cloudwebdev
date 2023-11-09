import './App.css';
import { useState } from 'react';
import { ImageSizeContext } from './context/ImageSizeContext';
import ImageList from './components/ImageList';


function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? '640px' : '240px';

  return (
    <div className="App">
      <ImageSizeContext.Provider value={imageSize}>
        <label>
          <input type="checkbox" checked={isLarge} onChange={e =>
            { setIsLarge(e.target.checked); }}/> 이미지 확대 토글 기능
        </label>
        <hr />
        <ImageList />
      </ImageSizeContext.Provider>
    </div>
  );
}

export default App;
