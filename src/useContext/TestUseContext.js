import React, {useContext} from 'react';
import { UserContext } from './UserContext';

export function TestUseContext() {
  const [state,setState] = useContext(UserContext);

  return (
    <>
      <p style={{ background: state.backgroundColor}}>xin chào</p>
      <input type="color" onClick={(e) => setState({backgroundColor,e.target.value)}/>
    </>
  )
}
