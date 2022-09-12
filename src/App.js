import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('#40639c');
  return (
    <div>
      <h1>Random-Color-Generator</h1>
      <div
        style={{
          width: 200,
          height: 200,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
        }}
      >
        Generated Color: {color}
      </div>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          setColor('');
        }}
      >
        Generate
      </button>
      <br />
      <br />
    </div>
  );
}

export default App;
