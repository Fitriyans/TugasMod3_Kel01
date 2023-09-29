import React, { useState, useEffect } from 'react';
import './app.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 10) {
      document.body.style.backgroundColor = 'blue';
      document.title = 'Counter mencapai 10!';

    } else {
      document.body.style.backgroundColor = 'white';
      document.title = 'Counter';

    }
  }, [count]);


  const Tambah = () => {
    setCount(count + 1);
  };

  const Kurang = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <h1>Counter App Kelompok 01</h1>
      {count === 10 && <p>Counter sudah di angka 10 nihh!</p>}
      <p>Counter: {count}</p>
      <button onClick={Tambah}>Tambah</button>
      <button onClick={Kurang}>Kurang</button>
    </div>
  );
}

export default App;
