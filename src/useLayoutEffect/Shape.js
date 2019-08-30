import React, {useEffect, useRef, useLayoutEffect, useState} from 'react';

export function Shape () {
  const [percent, setPercent] = useState(20)
  const [height, setHeight] = useState(null);


  const shapeRef = useRef(null)

  useEffect(() => {
    setHeight(shapeRef.current.offsetHeight)
    console.log(percent)
  }, [percent]);


  const style = {
    width: `100px`,
    height: `${percent}%`,
    background: "red",
    borderRadius: 'circle',
  }

  return (
    <div style={{height: "100vh"}}>
      <h3>useEffectlayout</h3>

      <div
        ref={shapeRef}
        style={style}>
        {height}
      </div>
      <input type="range" onChange={(e)=> setPercent(e.target.value)}/>
    </div>
  )
}
