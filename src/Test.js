import React, { useState, useEffect } from 'react';
import { useFetch } from "./hook/useFetch";

export function Test() {
  const [count, setCount] = useState(()=> JSON.parse(localStorage.getItem("count")));
  const {data,loading} = useFetch(`http://numbersapi.com/${count}/trivia`);
  console.log(data,loading);

  useEffect(() => {
    console.log("useeffect");
    document.title = `You clicked ${count} times`;
    localStorage.setItem("count", JSON.stringify(count));
  });

  return (
    <div>
      <div>{loading ? "loading..." : data}</div>
      <div>count: {count}</div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

