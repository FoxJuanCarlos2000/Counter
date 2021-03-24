import React, { useState, useEffect } from "react";

const Nota = (props) => {
  const { note } = props;

  return <li>{note.content}</li>;
};

const Notas = (props) => {
  const { notes } = props;
  const [notas, setNotas] = useState(notes);
  const [nuevaNota, setNuevaNota] = useState("");
  const [showImportant, SetShowImportant] = useState(false);
  //Setnota puede ir a cualquier lado
  //Nota no puede ir a culaquier lado
  useEffect(() => {
    console.log("Notas", notas);
  }, [notas]);

  const addNote = (e) => {
    e.preventDefault();
    //Prevenir default previene el comportamiento
    //normal del evento
    const noteObject = {
      content: nuevaNota,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notas.length + 1
    };
    setNotas(notas.concat(noteObject));
    setNuevaNota("");
    console.log("NotasNuevas", noteObject);
  };

  const handleNoteChange = (e) => {
    const { target } = e;
    const { value } = target;
    setNuevaNota(value);
  };
  const handleButton = () => {
    SetShowImportant(!showImportant);
  };

  const notasAmostrar = showImportant
    ? notas.filter((note) => note.important === true)
    : notas;

  return (
    <div>
      <h1>Notas</h1>
      <button onClick={handleButton}>
        Mostrar {showImportant ? "todos" : "importantes"}
      </button>
      <ul>
        {notasAmostrar.map((note) => (
          <Nota key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input onChange={handleNoteChange} value={nuevaNota} />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};
export default Notas;
