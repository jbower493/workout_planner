import React from 'react';

import { ListGroupItem, Button } from 'reactstrap';

const WorkoutExercise = (props) => {
  const removeWorkoutExercise = (e) => {
    const workoutId = props.workoutId;
    const workoutExerciseId = props.exercise._id;
    props.removeWorkoutExercise(workoutId, workoutExerciseId);
  };

  return (
    <ListGroupItem className="workout-exercise d-flex justify-content-between align-items-center">
      <p>{props.exercise.exercise.name}</p>
      <Button color="secondary" onClick={removeWorkoutExercise}>Remove from workout</Button>
    </ListGroupItem>
  )
};

export default WorkoutExercise;