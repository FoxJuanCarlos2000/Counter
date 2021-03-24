import React from "react";

const Course = (props) => {
  const { cours } = props;
  return <li>{cours.content}</li>;
};

const Courses = (props) => {
  const { course } = props;
  return (
    <div>
      <h1>Cursos</h1>
      <ul>
        {course.map((cours) => (
          <Course key={cours.id} cours={cours} />
        ))}
      </ul>
    </div>
  );
};
export default Courses;
