import React from 'react';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Spinner } from 'reactstrap';

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

  let button;
  if(props.fetching) {
    button = <ModalFooter>
        <Spinner size="sm" color="secondary" />
      </ModalFooter>;
  } else {
    button = <ModalFooter>
        <Button color="danger" onClick={proceedFunc}>Delete</Button>
        <Button color="primary" onClick={props.closeModal}>No, go back</Button>
      </ModalFooter>;
  }

  return (
    <div className="page-cover">
      <Modal isOpen={true}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          <p>{message}</p>
        </ModalBody>
        {button}
      </Modal>
    </div>
  )
};

export default ConfirmDeleteModal;