import React from 'react';

const ExerciseList = (props) => {
  return (
    <div>
      {props.exercises.map(ex => <div><h4>{ex.name}</h4><p>{ex.description}</p></div>)}
    </div>
  )
};

export default ExerciseList;