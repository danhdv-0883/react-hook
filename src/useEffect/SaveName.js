import React, { useState, useEffect } from 'react';

/*
  show name of user from localStorage if exits
  and update name from input form
*/
export function SaveName() {
  const [name, setName] = useState(() => (localStorage.getItem("name")));

  useEffect(() => {
    localStorage.setItem("name", name);
  },[name])

  return (
    <>
      <p>chào bạn, {name}</p>

      <form onSubmit={e => e.preventDefault()}>
        <input
         placeholder="please enter your name"
         value={name}
          onChange={e => setName(e.target.value)}
        />
      </form>
    </>
  );
}
