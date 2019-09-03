import React, { useState, useMemo } from 'react';

export const Word2 = () => {
  const [text, setText] = useState('A!');

  const ChildComponent = ({ text }) => {
    console.log('rendered again!');
    return (
      <div>

      </div>
    );
  }

  const MemoizedComponent = useMemo(() => <ChildComponent text={text} />, [text]);

  return (
    <div>
      <h3>useMemo</h3>
      <button onClick={() => setText({name: "age"})}>A! </button>
      <button onClick={() => setText('B!')}>B!</button>
      {MemoizedComponent}
    </div>
  )
}

