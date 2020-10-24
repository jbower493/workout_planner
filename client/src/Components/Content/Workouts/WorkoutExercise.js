import React, { useState } from 'react';

import { ListGroupItem, Button, Spinner } from 'reactstrap';

const WorkoutExercise = (props) => {
  const [removing, setRemoving] = useState(false);

  const removeWorkoutExercise = (e) => {
    setRemoving(true);
    const workoutId = props.workoutId;
    const workoutExerciseId = props.exercise._id;
    props.removeWorkoutExercise(workoutId, workoutExerciseId);
  };

  let button;
  if(props.fetching && removing) {
    button = <Spinner size="sm" color="secondary" />
  } else {
    button = <Button color="danger" onClick={removeWorkoutExercise}>Remove</Button>;
  }

  return (
    <ListGroupItem className="workout-exercise d-flex justify-content-between align-items-center">
      <div>{props.exercise.exercise.name}</div>
      {button}
    </ListGroupItem>
  )
};

export default WorkoutExercise;