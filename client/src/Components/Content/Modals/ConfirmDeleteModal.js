import React from 'react';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const ConfirmDeleteModal = (props) => {
  let title;
  let message;
  let proceedFunc;

  if(props.exerciseToDelete === null) {
    title = 'Delete Workout';
    message = 'Are you sure you want to delete this workout? This action cannot be undone.';
    proceedFunc = props.deleteWorkout;
  } else {
    title = 'Delete Exercise';
    message = 'Are you sure you want to delete this exercise? This will also remove the exercise from any workout that you have added it to, and cannot be undone.';
    proceedFunc = props.deleteExercise;
  }

  return (
    <div className="page-cover">
      <Modal isOpen={true}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          <p>{message}</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={proceedFunc}>Delete</Button>
          <Button onClick={props.closeModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
};

export default ConfirmDeleteModal;