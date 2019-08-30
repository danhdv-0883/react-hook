import React, {useState} from 'react';

export function IntroName() {
  const [name, setName] = useState('');

  return (
    <>
      <h3> - useState: </h3>

      <p>chào bạn, {name}</p>

      <form onSubmit={e=> e.preventDefault()}>
        <input
          placeholder="please enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </form>
    </>
  );
}
