import React, { useCallback, useState } from 'react';

export function WorkCallBack2() {
  const [numberBuy, setNumberBuy] = useState(0);
  const [numberSell, setNumberSell] = useState(0);

  // const clickBuy = useCallback(
  //   () => {
  //     console.log("render clickBuy")
  //     setNumberBuy(numberBuy+1)
  //   },
  //   [numberBuy],
  // )

  const clickBuy = () => {
    console.log("render click buuy");
    setNumberBuy(+1)
  }

  const clickSell = () => {
    console.log("render click sell");
    setNumberSell(+1)
  }


  return (
    <div>
      <button onClick={clickBuy}>click increatement nubmer buy</button>
      <button onClick={clickSell}> click increatement nubmer sel</button>
    </div>
    );
}

