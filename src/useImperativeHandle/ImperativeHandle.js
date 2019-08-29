import React, {useEffect, useRef} from "react";
import ChildInput from "./ChildInput";

export function ImperativeHandle () {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <ChildInput ref={inputRef} />
    </div>
  );
}
