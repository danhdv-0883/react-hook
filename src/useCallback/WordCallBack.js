import React, { useState, useCallback } from 'react';

// const CountButton = React.memo(function CountButton({onClick, count}) {
//   console.log("count button render", count, onclick);

//   return <button onClick={onClick}>{count}</button>
// })

// export function WordCallBack() {
//   const [count1, setCount1] = React.useState(0)
//   const increment1 = React.useCallback(() => setCount1(c => c + 1), [])
//   const [count2, setCount2] = React.useState(0)
//   const increment2 = React.useCallback(() => setCount2(c => c + 1), [])
//   return (
//     <div>
//       <CountButton count={count1} onClick={increment1} />
//       <CountButton count={count2} onClick={increment2} />
//     </div>
//   )
// }


function CountButton({onClick, count}) {
  console.log("count button render", count, onclick)
  return <button onClick={onClick}>{count}</button>
}

export function WordCallBack() {
  const [count1, setCount1] = React.useState(0)
  const increment1 = () => setCount1(c => c + 1)
  const [count2, setCount2] = React.useState(0)
  const increment2 = () => setCount2(c => c + 1)
  return (
    <>
      <CountButton count={count1} onClick={increment1} />
      <CountButton count={count2} onClick={increment2} />
    </>
  )
}
