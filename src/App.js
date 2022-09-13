import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [backgroundColor, setBackgroundColor] = useState(randomColor());

  return (
    <div>
      <h1
        css={[
          css`
            text-align: center;
          `,
        ]}
      >
        Random-Color-Generator
      </h1>
      <br />
      <br />
      <br />
      <br />
      <div
        style={{
          width: 250,
          height: 250,
          margin: '0 auto',
          display: 'flex',
          boxShadow: '5px 5px 8px #888888',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          textAlign: 'center',
          backgroundColor: backgroundColor,
        }}
      >
        Generated Color: {backgroundColor}
      </div>
      <br />
      <br />
      <br />
      <div
        css={[
          css`
            display: block;
            box-sizing: border-box;
            padding: 16px 32px;
            font-size: 0.75rem;
            font-weight: 600;
            text-align: center;
          `,
        ]}
      >
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
