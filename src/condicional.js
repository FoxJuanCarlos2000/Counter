import React, { Fragment } from "react";

const Conditional = (props) => {
  const { totalMessages } = props;
  const { totalFrutas } = props;

  return (
    <fragment>
      <h1>Elemento 1</h1>
      {totalMessages > 0 && <h2>Tun tienes mensajes.</h2>}
      {totalMessages > 0 ? (
        <h2>Tu tienes mensajes</h2>
      ) : (
        <h2>No tienes mensajes</h2>
      )}
    </fragment>
  );
};

export default Conditional;
