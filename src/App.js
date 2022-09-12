import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  /* const [color, setColor] = useState(''); */

  const [backgroundColor, setBackgroundColor] = useState(randomColor());

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
          backgroundColor: backgroundColor,
        }}
      >
        Generated Color: {backgroundColor}
      </div>
      <br />
      <br />
      <br />
      <div>
        <button onClick={() => setBackgroundColor(randomColor())}>
          Generate
        </button>
      </div>
      <br />
      <br />
    </div>
  );
}

export default App;
