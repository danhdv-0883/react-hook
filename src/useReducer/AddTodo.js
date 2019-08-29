import React, { useReducer, useState } from 'react';

const initState = {
  notes: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        notes: [
          ...state.notes, { text: action.text }
        ]
      }
    case 'removeAll':
      return {
        notes: [],
      }
    default:
      throw new Error();
  }
}

export const AddTodo = () => {
  const [text, setText] = useState();
  const [state, dispatch] = useReducer(reducer, initState)

  return(
    <div>
      <ul>
        {state.notes.map((note, index) => <li key={index}>{note.text}</li>)}
      </ul>

      <form onSubmit={e=> e.preventDefault()}>
        <input type="text" onChange={(e)=> setText(e.target.value)}>
        </input>
        <button onClick={() => { dispatch({ type: 'add', text }) }}>ok</button>
      </form>
    </div>
  );

}
