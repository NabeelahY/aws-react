import React, { useState } from 'react';
import { Predictions } from 'aws-amplify';

function App() {
  const [res, setRes] = useState('');

  const identify = async (event) => {
    setRes('Identifying');
    const {
      target: { files },
    } = event;

    const file = files[0];
    const data = await Predictions.identify({
      text: { source: { file }, format: 'PLAIN' },
    });

    setRes(data.text.fullText);
  };
  return (
    <div>
      <h3>Convert to Text</h3>
      <input type="file" onChange={identify} />
      <p>{res}</p>
    </div>
  );
}

export default App;
