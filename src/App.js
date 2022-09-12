import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');
  return (
    <div>
      <h1>Random-Color-Generator</h1>
      <div
        style={{
          width: 250,
          height: 250,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          backgroundColor: randomColor(),
        }}
      >
        Generated Color: {randomColor()}
      </div>
      <br />
      <br />
      <br />
      <div>
        <button
          onClick={() => {
            const newColor = randomColor();
            setColor(newColor);
          }}
        >
          Generate
        </button>
        {color};
      </div>
      <br />
      <br />
    </div>
  );
}

export default App;
