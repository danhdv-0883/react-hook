import { useState, useDebugValue } from "react";

export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);
  useDebugValue(`đây là custom hook`)
  return [
    values,
    e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    }
  ];

}
