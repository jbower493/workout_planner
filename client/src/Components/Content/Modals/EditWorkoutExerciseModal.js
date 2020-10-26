import React, { useState } from 'react';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';

const EditWorkoutExerciseModal = (props) => {
  const [reps, setReps] = useState(props.workoutExerciseToEdit.workoutExercise.reps);
  const [sets, setSets] = useState(props.workoutExerciseToEdit.workoutExercise.sets);
  const [weight, setWeight] = useState(props.workoutExerciseToEdit.workoutExercise.weight);

  const editWorkoutExercise = e => {
    props.editWorkoutExercise(reps, sets, weight);
  };

  let button;
  if(props.fetching) {
    button = <ModalFooter>
        <Spinner size="sm" color="secondary" />
      </ModalFooter>;
  } else {
    button = <ModalFooter>
        <Button color="primary" onClick={editWorkoutExercise}>Save</Button>
        <Button color="danger" onClick={props.closeModal}>Cancel</Button>
      </ModalFooter>;
  }

  return (
    <div className="page-cover">
      <Modal isOpen={true}>
        <ModalHeader>
          Edit Details for:<br/>
          <span className="text-primary">{props.workoutExerciseToEdit.workoutExercise.exercise.name}</span>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup className="mb-2">
              <Label className="mb-0">Reps</Label>
              <Input type="number" value={reps} onChange={e => setReps(e.target.value)} />
            </FormGroup>
            <FormGroup className="mb-2">
              <Label className="mb-0">Sets</Label>
              <Input type="number" value={sets} onChange={e => setSets(e.target.value)} />
            </FormGroup>
            <FormGroup className="mb-2">
              <Label className="mb-0">Weight</Label>
              <Input type="text" value={weight} onChange={e => setWeight(e.target.value)} />
            </FormGroup>
          </Form>
        </ModalBody>
        {button}
      </Modal>
    </div>
  )
};

export default EditWorkoutExerciseModal;