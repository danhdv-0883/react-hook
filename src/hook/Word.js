import React,{ useMemo, useState } from 'react';

function upper(text) {
  console.log("uppercase");
  return text.toUpperCase();
}

const UpperCase = ({ text }) => {
  const upperCaseText = useMemo(() => upper(text), [text]);
  // it will render upper function when Word Component render
  // const upperCaseText = upper(text);
  return upperCaseText;
}

export function Word () {
  const [name, setName] = useState("demo");

  return(
    <form onSubmit={e => e.preventDefault()}>
      <UpperCase text="text demo"/>
      <input value={name} onChange={e => setName(e.target.value)}/>
    </form>
  )
}

