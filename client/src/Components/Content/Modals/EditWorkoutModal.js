import React, { useState } from 'react';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';

const EditWorkoutModal = (props) => {
  const [name, setName] = useState(props.workoutToEdit.name);
  const [duration, setDuration] = useState(props.workoutToEdit.duration);
  const [type, setType] = useState(props.workoutToEdit.type);

  const editWorkout = e => {
    props.editWorkout(name, duration, type);
  };

  let button;
  if(props.fetching) {
    button = <ModalFooter>
        <Spinner size="sm" color="secondary" />
      </ModalFooter>;
  } else {
    button = <ModalFooter>
        <Button onClick={editWorkout}>Save</Button>
        <Button onClick={props.closeModal}>Cancel</Button>
      </ModalFooter>;
  }

  return (
    <div className="page-cover">
      <Modal isOpen={true}>
        <ModalHeader>Edit Workout</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Name</Label>
              <Input type="text" value={name} onChange={e => setName(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label>Duration</Label>
              <Input type="text" value={duration} onChange={e => setDuration(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label>Type</Label>
              <Input type="text" value={type} onChange={e => setType(e.target.value)} />
            </FormGroup>
          </Form>
        </ModalBody>
        {button}
      </Modal>
    </div>
  )
};

export default EditWorkoutModal;