import React, { useState } from 'react';
import WorkoutExercise from './WorkoutExercise';

import { ListGroup, ListGroupItem, Button, Collapse } from 'reactstrap';

const Workout = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const showAddToWorkout = e => {
    props.showAddToWorkout(props.workout);
  };

  const showDeleteModal = e => {
    props.showDeleteModal('workout', props.workout._id);
  };

  const removeWorkoutExercise = (workoutId, workoutExerciseId) => {
    props.removeWorkoutExercise(workoutId, workoutExerciseId);
  };

  const viewWorkout = () => {
    props.viewWorkout(props.workout);
  };

  return (
    <div>
      <ListGroup className="mb-3">
        <ListGroupItem color="primary" className="workout-title stack d-flex justify-content-between align-items-center">
          <h4 className="workout-name" onClick={toggle} >{props.workout.name} <i className="fas fa-caret-down"></i></h4>
          <div className="end-section">
            <Button color="secondary" className="stack-button" onClick={viewWorkout}>Workout details</Button>
            <Button color="secondary" className="stack-button middle-button" onClick={showAddToWorkout} >Add exercise</Button>
            <Button color="secondary" className="stack-button" onClick={showDeleteModal}>Delete workout</Button>
          </div>
        </ListGroupItem>
        <Collapse isOpen={isOpen}>
          {
            props.workout.exercises.map(exercise => <WorkoutExercise
              key={props.workout.exercises.indexOf(exercise)}
              exercise={exercise}
              workoutId={props.workout._id}
              removeWorkoutExercise={removeWorkoutExercise}
              fetching={props.fetching} />)
          }
        </Collapse>
      </ListGroup>
    </div>
  )
};

export default Workout;