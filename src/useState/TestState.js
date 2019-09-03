import React, { useState, useEffect } from 'react';

export function Foo({label,value}){
  useEffect(()=>{
    console.log("call effect",label, value);

  }, [label, value]);
  return(
    <div>day la Foo</div>
  )
}

export function TestState () {
  const [age, setAge] = useState({age: "moi sau"});
  return (
    <div>
      <Foo value={age} label="age"/>
      <button onClick={() => setAge([11,12,13])}>change age</button>
      <button onClick={() => setAge({ age: "moi sau" })}>change age</button>
    </div>
  )
}


