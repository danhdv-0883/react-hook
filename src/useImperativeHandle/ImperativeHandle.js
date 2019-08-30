import React, {useEffect, useRef} from "react";
import ChildInput from "./ChildInput";

export function ImperativeHandle () {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h3>useImperativeHandle</h3>
      <ChildInput ref={inputRef} />
    </div>
  );
}
