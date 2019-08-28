import { useState, useRef, useEffect } from 'react';

export const useForm = initValue => {
  const [values, setValues] = useState(initValue);
  const isCurrent = useRef(true);

  useEffect(() => {
    return () => {
      // called when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  return [
    values,
    e => {
      setTimeout(() => {
        if (isCurrent.current) {
          setValues({ data: y, loading: false });
        }
      }, 10000);
    }
  ]

}
