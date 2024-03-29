import React, { useState, useEffect, useRef } from 'react';
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
import { Shape2 } from './useLayoutEffect/Shape2';
import { WordCallBack } from './useCallback/WordCallBack';
import { ImperativeHandle } from './useImperativeHandle/ImperativeHandle';
import { WorkCallBack2 } from './useCallback/WorkCallBack2';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { TestState } from './useState/TestState';


function App() {
  const [values, handleChange] = useForm({ email: "", password: "" });
  // const [values2, handleChange2] = useForm({ firstName: "", lastName: "" });
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);

  const [pe, setPe] = useState({name:"ai do", age: 18});
  const [ar, setAr] = useState([1, 2, 3, 4, { name: "ai do", age: 18 }]);

  //
  const inputRef = useRef();
  const hello = useRef(() => console.log("hello"));
  const [showHello, setShowHello] = useState(true);

  return (
    <div>
      <>
        {/* object state */}
        {/* <input onChange={e=>setPe(Object.assign(pe, {name: e.target.value}))} /> */}
        <input onChange={e=>setPe({...pe, name: e.target.value})} />
        {console.error("AAAA", pe)}

        {/* array state */}
        <input onChange={e => setAr([...ar,e.target.value])} />
        {console.error("BBB", ar)}

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
        <TestState/>

        <Router>
          <NavLink activeClassName="active-link" to="/state">state</NavLink>
          <NavLink activeClassName="active-link" to="/effect">effect</NavLink>
          <NavLink activeClassName="active-link" to="/context">context</NavLink>
          <NavLink activeClassName="active-link" to="/custom">custom</NavLink>
          <NavLink activeClassName="active-link" to="/ref">ref</NavLink>
          <NavLink activeClassName="active-link" to="/layouteffect">layouteffect</NavLink>
          <NavLink activeClassName="active-link" to="/callback">callback</NavLink>
          <NavLink activeClassName="active-link" to="/memo">memo</NavLink>
          <NavLink activeClassName="active-link" to="/reducer">reducer</NavLink>
          <NavLink activeClassName="active-link" to="/impe">impe</NavLink>

          <Route path="/state" component={IntroName} />
          <Route path="/effect" component={SaveName} />
          <UserProvider>
            <Route path="/context" component={TestUseContext} />
          </UserProvider>
          <Route path="/custom" component={FormUseCustomHook} />
          <Route path="/ref" component={FormUseRef} />
          <Route path="/layouteffect" component={Shape2} />
          <Route path="/callback" component={WordCallBack} />
          <Route path="/memo" component={Word} />
          <Route path="/reducer" component={AddTodo} />
          <Route path="/impe" component={ImperativeHandle} />

        </Router>
      </>
    </div>
  );
}

export default App;
