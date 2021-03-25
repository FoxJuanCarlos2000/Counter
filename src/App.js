import "./styles.css";
//import Counter from "./Counter";
//import Notas from "./Notas";
import Telefonos from "./Telefonia";
//import Courses from "./Courses";
//import Conditional from "./condicional";

// Const es un tipo de declaración de variable
// que nos dice que la variable es la misma
// en todo su tiempo de vida.

// Let es un tipo de declaración de variable
// que nos dice que la variable PUEDE cambiar
// en el transcurso de su vida.
const notes = [
  {
    id: 1,
    content: "HTML es muy fácil",
    date: "2020-01-01",
    important: true
  },
  {
    id: 2,
    content: "Los navagadores solo pueden ejecutar Javascript, HTML y CSS.",
    date: "2020-01-20",
    important: false
  }
];
//Array del curso
const cours = [
  {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name: "Node.js",
    id: 2,
    parts: [
      {
        name: "Routing",
        exercises: 3,
        id: 1
      },
      {
        name: "Middlewares",
        exercises: 7,
        id: 2
      }
    ]
  }
];

// <Courses cours={cours} />
//<Counter />
//<Conditional totalMessages={0} />
//<Notas notes={notes} />
export default function App() {
  return (
    <div>
      <Telefonos />
    </div>
  );
}
