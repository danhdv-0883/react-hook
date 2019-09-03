// array shape
import React, {useEffect, useLayoutEffect, useState} from 'react';

export function Shape2() {
  const [count, setCount] = useState(0);

  const styleItem = {
    backgroundColor: "gray",
    height: "100px",
    weight: "100px",
    margin: "2px",
  }

  useEffect(()=>{
     console.log("=== EFFECT STARTED === ");
    new Array(count).fill(count).forEach(val => console.log(val));
    console.log(`=== EFFECT COMPLETED === `);

  },[count]);

  return (
    <div>
    <h1>Layout effect</h1>
      <div style={{display: "flex", flexWrap: "wrap"}}>
        {Array(count).fill(count).map((item,index) => (
          <div style={styleItem} key={index}>{item}</div>
        ))}
      </div>
      <button onClick={()=> {setCount(400)}}> ok </button>
    </div>
  );
}
