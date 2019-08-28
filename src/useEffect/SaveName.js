import React, { useState, useEffect } from 'react';

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
