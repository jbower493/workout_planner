import React, { useState } from 'react';
import WorkoutExercise from './WorkoutExercise';

import { ListGroup, ListGroupItem, Button, Collapse } from 'reactstrap';

const Workout = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
    <div>
      <ListGroup>
        <ListGroupItem color="primary" className="workout-title d-flex justify-content-between align-items-center">
          <h3 className="workout-name" onClick={toggle} >{props.workout.name} <i className="fas fa-caret-down"></i></h3>
          <div className="end-section">
            <Button color="secondary" className="mr-3" onClick={showAddToWorkout} >Add exercise</Button>
            <Button color="secondary" onClick={deleteWorkout}>Delete workout</Button>
          </div>
        </ListGroupItem>
        <Collapse isOpen={isOpen}>
          {
            props.workout.exercises.map(exercise => <WorkoutExercise
              key={props.workout.exercises.indexOf(exercise)}
              exercise={exercise}
              workoutId={props.workout._id}
              removeWorkoutExercise={removeWorkoutExercise} />)
          }
        </Collapse>
      </ListGroup>
    </div>
  )
};

export default Workout;