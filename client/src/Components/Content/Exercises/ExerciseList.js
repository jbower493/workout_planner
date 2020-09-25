import React from 'react';

import Exercise from './Exercise';

import { ListGroup } from 'reactstrap';

const ExerciseList = (props) => {
  return (
    <ListGroup>
      {props.exercises.map(ex => <Exercise
        exercise={ex} 
        showEditExercise={props.showEditExercise}
        key={props.exercises.indexOf(ex)}
        showDeleteModal={props.showDeleteModal} />)}
    </ListGroup>
  )
};

export default ExerciseList;