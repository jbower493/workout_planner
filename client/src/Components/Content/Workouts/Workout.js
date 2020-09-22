import React from 'react';
import WorkoutExercise from './WorkoutExercise';

const Workout = (props) => {
  const showAddToWorkout = e => {
    props.showAddToWorkout(props.workout);
  };

  const deleteWorkout = e => {
    props.deleteWorkout(props.workout);
  };

  const removeWorkoutExercise = (workoutId, workoutExerciseId) => {
    props.removeWorkoutExercise(workoutId, workoutExerciseId);
  };

  return (
    <div className="workout">
      <div className="workout-title">
        <h3>{props.workout.name}</h3>
        <div className="end-section">
          <div className="add" onClick={showAddToWorkout} >+</div>
          <div className="delete-workout" onClick={deleteWorkout}>d</div>
        </div>
      </div>
      <div className="workout-exercises">
        {
          props.workout.exercises.map(exercise => <WorkoutExercise
            key={props.workout.exercises.indexOf(exercise)}
            exercise={exercise}
            workoutId={props.workout._id}
            removeWorkoutExercise={removeWorkoutExercise} />)
        }
      </div>
    </div>
  )
};

export default Workout;