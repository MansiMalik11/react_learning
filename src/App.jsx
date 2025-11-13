import React, { useEffect, useState } from 'react';
import API from './api';
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get('/products')
      .then(response => {setData(response.data);})
      .catch(error => {console.error('Error fetching API:', error);});
  }, []);

  return (
    <div>
      <h1>React + Laravel API Demo</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}

export default App;

// import { useState } from "react";
// import Counter from "./Counter";

// function App() {
//   const [display, setDisplay] = useState(true);

//   return (
//     <div>
//       <h1>Toggle or Hide and show in React</h1>
//       <button onClick={() => setDisplay(!display)}>Toggle</button>
//       {display ? <h2>Mansi</h2> : null}
//       {display ? <Counter /> : null}

//     </div>
//   )
// }

// export default App