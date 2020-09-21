import React from 'react';
import WorkoutExercise from './WorkoutExercise';

const Workout = (props) => {
  return (
    <div className="workout">
      <div className="workout-title">
        <h3>{props.workout.name}</h3>
        <div className="add">+</div>
      </div>
      <div className="workout-exercises">
        {
          props.workout.exercises.map(exercise => <WorkoutExercise key={props.workout.exercises.indexOf(exercise)} exercise={exercise} />)
        }
      </div>
    </div>
  )
};

export default Workout;