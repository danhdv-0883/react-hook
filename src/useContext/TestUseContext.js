import React, {useContext} from 'react';
import { UserContext } from './UserContext';

export function TestUseContext() {
  const [state,setState] = useContext(UserContext);

  return (
    <div>
      <h3> - useContext </h3>
      <p style={{ background: state.backgroundColor}}>xin chào</p>
      <input type="color" onChange={(e) => setState({ backgroundColor: e.target.value })} />
    </div>
  )
}
