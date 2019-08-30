import React, { useState, useCallback } from 'react';

export const WordCallBack = () => {
  const [text, setText] = useState('Hello!');

  const ChildComponent = ({ text }) => {
    console.log('rendered again!');
    return (
      <div>
        {text}
      </div>
    );
  }

  const MemoizedComponent = useCallback(() => <ChildComponent text={text} />, [text]);

  return (
    <div>
      <h3>useCallBack</h3>
      <button onClick={() => setText('Hello!')}>Hello! </button>
      <button onClick={() => setText('Hola!')}>Hola!</button>
      {MemoizedComponent()}
    </div>
  )
}

