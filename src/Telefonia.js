import React, { useState, Fragment } from "react";

const Telefonos = () => {
  const [persons, setPersons] = useState([
    { name: "Carlos", number: "4686867949" }
  ]);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");

  const Nnombre = (e) => {
    const { target } = e;
    const { value } = target;
    setNombre(value);
    console.log(value);
  };

  const Ntelefono = (e) => {
    const { target } = e;
    const { value } = target;
    setTelefono(value);
    console.log(value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    if (telefono.length < 10) {
      alert("Debe de contener 10 caracteres");
    } else {
      let contador = 0;
      for (let i = 0; i <= persons.length - 1; i++) {
        persons[0].number.includes();
        if (persons[i].number == telefono) {
          alert("Ya existe usuario con este numero");
          contador = 1;
        }
      }
      if (contador == 0) {
        const personObject = {
          name: nombre,
          number: telefono
        };
        setPersons(persons.concat(personObject));
        setNombre("");
        setTelefono("");
      }
    }
  };

  return (
    <Fragment>
      <h2>Guía telefónica</h2>
      <form onSubmit={addPerson}>
        <div>
          Nombre: <input onChange={Nnombre} value={nombre} />
        </div>
        <div>
          Numero: <input maxLength={10} onChange={Ntelefono} value={telefono} />
        </div>
        <div>
          <button type="submit">Guardar</button>
        </div>
      </form>
      <h2>Numbers</h2>

      <table>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Telefono</th>
        </tr>
        {persons.map((personas, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{personas.name}</td>
              <td>{personas.number}</td>
            </tr>
          );
        })}
      </table>
    </Fragment>
  );
};

export default Telefonos;
