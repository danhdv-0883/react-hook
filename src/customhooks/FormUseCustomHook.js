import React, { useState } from 'react';
import { useForm } from './useForm';

export function FormUseCustomHook() {
  const [inputs, hangeInput] = useForm({name:''});

  return (
    <>
      <h3> - custom hooks: </h3>

      <p>chào bạn, {inputs.name}</p>

      <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="please enter your name"
          name="name"
          value={inputs.name}
          onChange={hangeInput}
        />
      </form>
    </>
  );
}
