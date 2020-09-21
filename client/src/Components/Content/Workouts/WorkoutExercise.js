import React from 'react';

const WorkoutExercise = (props) => {
  return (
    <div className="workout-exercise">
      <p>{props.exercise.name}</p>
    </div>
  )
};

export default WorkoutExercise;