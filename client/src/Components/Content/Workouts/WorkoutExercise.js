import React from 'react';

const WorkoutExercise = (props) => {
  return (
    <div className="workout-exercise">
      <p>{props.exercise.exercise.name}</p>
      <div className="remove" onClick={() => console.log('clicked')}>r</div>
    </div>
  )
};

export default WorkoutExercise;