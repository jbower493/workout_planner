import React, { useState } from 'react';

import { ListGroupItem, Button, Collapse } from 'reactstrap';

const Exercise = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const showEditExercise = () => {
    props.showEditExercise(props.exercise);
  };

  const showDeleteModal = e => {
    props.showDeleteModal('exercise', props.exercise);
  };

  return (
    <ListGroupItem>
      <div className="stack d-flex justify-content-between align-items-center">
        <h5 className="exercise-name pointer" onClick={toggle}>{props.exercise.name} <i className="fas fa-caret-down"></i></h5>
        <div className="end-section">
          <Button color="secondary" className="left-button stack-button" onClick={showEditExercise}>Edit exercise</Button>
          <Button color="secondary" className="stack-button" onClick={showDeleteModal}>Delete exercise</Button>
        </div>
      </div>
      <Collapse isOpen={isOpen}>
        <p className="text-primary mt-3">{props.exercise.muscleGroup}</p>
        <p>{props.exercise.description}</p>
      </Collapse>
    </ListGroupItem>
  )
};

export default Exercise;