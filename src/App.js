import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { Test } from "./Test";
import { useForm } from './hook/useForm';
import { useFetch } from './hook/useFetch'
import { Hello } from './Hello';
import { AddTodo } from './useReducer/AddTodo';
import { Word } from './useMemo/Word';
import { IntroName } from './useState/IntroName';
import { SaveName } from './useEffect/SaveName';
import { FormUseCustomHook } from './customhooks/FormUseCustomHook';
import { FormUseRef } from './useRef/FormUseRef';
import { TestUseContext } from './useContext/TestUseContext';
import { UserProvider } from './useContext/UserContext';
import { Shape } from './useLayoutEffect/Shape';
import { WordCallBack } from './useCallback/WordCallBack';


function App() {
  const [values, handleChange] = useForm({ email: "", password: "" });
  // const [values2, handleChange2] = useForm({ firstName: "", lastName: "" });
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);

  //
  const inputRef = useRef();
  const hello = useRef(() => console.log("hello"));
  const [showHello, setShowHello] = useState(true);

  return (
    <div>
      <>
        <h1>
          {values.email} {values.password} {todos[0].text}
          {console.log(todos[0].text)}
        </h1>
        <div className="input-group mb-3">
          <input
            className="form-control"
            name="email"
            value={values.email}
            onChange={handleChange}
            ref={inputRef}
          />
          <input
            type="password"
            className="form-control"
            name="password"
            value={values.password}
            onChange={handleChange}
          />

          <button
            onClick={() => {
              inputRef.current.focus();
              hello.current();
            }}
          >
            focus
          </button>
        </div>
        <Test />
        {/* <Hello /> */}
        <button onClick={() => setShowHello(!showHello)}>toggle</button>
        {showHello && <Hello />}

        <h3> - useReducer: </h3>
        <AddTodo/>
        <h3> - useMemo: </h3>
        <Word />
        <h3> - useState: </h3>
        <IntroName />
        <h3> - useEffect: </h3>
        <SaveName />
        <h3> - custom hooks: </h3>
        <FormUseCustomHook />
        <h3> - useRef: </h3>
        <FormUseRef />

        <h3> - useContext </h3>
        <UserProvider>
          <TestUseContext />
        </UserProvider>
        <h3>useEffectlayout</h3>
        <Shape />

        <h3>useCallBack</h3>
        <WordCallBack />
      </>
    </div>
  );
}

export default App;
