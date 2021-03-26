import React, { useState, Fragment, useEffect } from "react";

const Rest = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("1era Vez renderizado");
    handleLoadUsers();
  }, []);

  const handleLoadUsers = async () => {
    console.log("Cargando usuarios...");

    /*fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      console.log("Fin");
    });
    */

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
  };
  console.log("Usuarios: ", users);

  return (
    <Fragment>
      <h1>Usuarios</h1>
      {users.length === 0 ? (
        <Fragment>
          <p>No hay usuarios aun</p>
          {/*  <button onClick={handleLoadUsers}>Carga mis usuarios</button> */}
        </Fragment>
      ) : (
        <Fragment>
          <p>Hay usuarios</p>
          {users.map((users, index) => {
            return (
              <tr key={index}>
                <td>{users.id}</td>
                <td>{users.name}</td>
                <td>{users.email}</td>
              </tr>
            );
          })}
        </Fragment>
      )}
    </Fragment>
  );
};
export default Rest;
