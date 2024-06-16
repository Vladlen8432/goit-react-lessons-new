// import React, { useMemo, useState } from 'react';

// const AppWithMemo = () => {
//   const [planets, setPlanets] = useState(['Earth', 'Mars', 'Jupiter', 'Venus']);
//   const [query, setQuery] = useState('');
//   const [counter, setCounter] = useState(0);

//   const filteredPlanets = useMemo(
//     () =>
//       planets.filter(planet => {
//         for (let i = 0; i < 1_000_000_000; i++) {}
//         return planet.toLowerCase().includes(query.toLowerCase());
//       }),
//     [planets, query]
//   );

//   return (
//     <div>
//       <button onClick={() => setCounter(prevState => prevState + 1)}>
//         Increment counter: {counter}
//       </button>
//       <input type="text" onChange={event => setQuery(event.target.value)} />
//       {filteredPlanets.map(planet => (
//         <div key={planet}>{planet}</div>
//       ))}
//     </div>
//   );
// };

// export default AppWithMemo;
