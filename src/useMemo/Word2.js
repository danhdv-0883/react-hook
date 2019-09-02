import React, { useState, useMemo } from 'react';

export const Word2 = () => {
  const [text, setText] = useState('A!');

  const ChildComponent = ({ text }) => {
    console.log('rendered again!');
    return (
      <div>
        {text.toUpperCase()}
      </div>
    );
  }

  const MemoizedComponent = useMemo(() => <ChildComponent text={text} />, [text]);

  return (
    <div>
      <h3>useCallBack</h3>
      <button onClick={() => setText('A!')}>A! </button>
      <button onClick={() => setText('B!')}>B!</button>
      {MemoizedComponent}
    </div>
  )
}

