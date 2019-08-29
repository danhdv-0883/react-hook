import React, {useEffect, useRef, useLayoutEffect, useState} from 'react';

export function Shape () {
  const [percent, setPercent] = useState(20)
  const [width, setWidth] = useState();

  useEffect(()=>{


  }, percent)

  const hangeChange = () => {
    setWidth(e.target.value);
  }

  return (
    <div style={{ background: "gray", width: width*10}}>
      width: {width}

      <input type="range" onChange={hangeChange}/>
    </div>
  )
}
