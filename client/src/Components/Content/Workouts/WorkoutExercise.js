import React from 'react';

const WorkoutExercise = (props) => {
  const removeWorkoutExercise = (e) => {
    const workoutId = props.workoutId;
    const workoutExerciseId = props.exercise._id;
    props.removeWorkoutExercise(workoutId, workoutExerciseId);
  };

  return (
    <div className="workout-exercise">
      <p>{props.exercise.exercise.name}</p>
      <div className="remove" onClick={removeWorkoutExercise}>r</div>
    </div>
  )
};

export default WorkoutExercise;