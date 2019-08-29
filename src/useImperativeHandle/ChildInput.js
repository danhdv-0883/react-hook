import React, { useRef, useImperativeHandle, forwardRef} from 'react';

function ChildInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => inputRef.current);

  return <input type="text" ref={inputRef} />;
}

export default forwardRef(ChildInput);
