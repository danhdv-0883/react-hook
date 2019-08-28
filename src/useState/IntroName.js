import React, {useState} from 'react';

export function IntroName() {
  const [name, setName] = useState('');

  return (
    <>
      <h1>chào bạn, {name}</h1>

      <form onSubmit={e=> e.preventDefault()}>
        <input value={name} onChange={e=> setName(e.target.value)} />
      </form>
    </>
  );
}
