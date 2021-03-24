import React, { useState, useEffect, Fragment } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleClick2 = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log("Diste click $(count) veces");
  });

  return (
    <Fragment>
      <button className="btn" onClick={() => handleClick()}>
        Aumentar
      </button>
      <p>Aumento y Disminución {count}</p>

      <button className="btn" onClick={() => handleClick2()}>
        Disminuir
      </button>
    </Fragment>
  );
};

export default Counter;
