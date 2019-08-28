import React, {useReducer} from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [
        ...state.note,
        {text: state.text}
      ]
    case 'remove':
      return '';
    default:
      throw new Error();
  }
}


