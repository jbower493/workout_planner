import React, { useState } from 'react';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const EditWorkoutExerciseModal = (props) => {
  const [reps, setReps] = useState(props.workoutExerciseToEdit.workoutExercise.reps);
  const [sets, setSets] = useState(props.workoutExerciseToEdit.workoutExercise.sets);
  const [weight, setWeight] = useState(props.workoutExerciseToEdit.workoutExercise.weight);

  const editWorkoutExercise = e => {
    props.editWorkoutExercise(reps, sets, weight);
  };

  return (
    <div className="page-cover">
      <Modal isOpen={true}>
        <ModalHeader>
          Edit Details for:<br/>
          <span className="text-primary">{props.workoutExerciseToEdit.workoutExercise.exercise.name}</span>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Reps</Label>
              <Input type="number" value={reps} onChange={e => setReps(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label>Sets</Label>
              <Input type="number" value={sets} onChange={e => setSets(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label>Weight</Label>
              <Input type="text" value={weight} onChange={e => setWeight(e.target.value)} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={editWorkoutExercise}>Save</Button>
          <Button onClick={props.closeModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
};

export default EditWorkoutExerciseModal;