import React, { useState, useRef, useDebugValue} from 'react';

/*
After click button submit form, forcus input(have ref)
*/
export function FormUseRef() {
  const [name, setName] = useState('');
  const inputNameRef = useRef();

  return (
    <>
      <h3> - useRef: </h3>

      <p>chào bạn, {name}</p>
      <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="please enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
          ref={inputNameRef}
        />
        <button onClick={
          () => {
            setName("");
            inputNameRef.current.focus();
          }
        }>
          ok
        </button>
      </form>
    </>
  );
}
