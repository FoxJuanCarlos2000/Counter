import React, { Fragment } from "react";

const Asincrono = () => {
  //Asincrono es algo fundamental en JS
  //Que solo puede ejecutar una sola cosa
  // a la vez en el proceso de vida
  //Asincrono: La respuesta sucede a futuro
  //Sincrono: la respuesta  se da en el presente
  const uno = () => {
    console.log("uno");
    dos();
    console.log("tres");
  };
  const dos = () => {
    console.log("dos");
  };

  const handleClick = () => {
    console.log("Inicio");
    uno();
    console.log("Fin");
  };

  const handleClickSincrono = () => {
    console.log("Inicio");
    uno();
    console.log("Fin");
  };
  const unoSincrono = () => {
    console.log("Inicio");
    dosSincrono();
    console.log("Fin");
  };
  const dosSincrono = () => {
    console.log("Inicio");
    unoSincrono();
    console.log("Fin");
  };

  return (
    <Fragment>
      <button onClick={handleClick}>Click</button>;
      <button onClick={handleClickSincrono}>Click sincrono</button>;
    </Fragment>
  );
};

export default Asincrono;
