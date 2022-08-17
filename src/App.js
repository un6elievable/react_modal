import { useState } from 'react';
import './index.scss';

function App() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0); 

  const onClickPlus = () => {
    setCount(count + 1)
  }
  const onClickMinus = () => {
    setCount(count - 1)
  }
  
  return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="open-modal-btn">🤩 Ну-ка что тут у нас....</button>
      <div className={`overlay animated ${open ? 'show' : ''}`} >
        <div className="modal">
          <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          {/* <img src="https://i.gifer.com/2Gb.gif" alt='img'/> */}
          <div>
            <h2>Счетчик:</h2>
            <h1>{count}</h1>
            <button onClick={onClickMinus} className="minus">Минус</button>
            <button onClick={onClickPlus} className="plus">Плюс </button>
          </div>
        </div>
      </div>    
    </div>
  );
}

export default App;