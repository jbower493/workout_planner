import React, { useState } from 'react';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddToWorkout = (props) => {
  const [reps, setReps] = useState(10);
  const [sets, setSets] = useState(3);
  const [weight, setWeight] = useState('');
  const [exerciseToAdd, setExerciseToAdd] = useState('');

  const addToWorkout = (e) => {
    const exercise = {
      exercise: exerciseToAdd,
      reps,
      sets,
      weight 
    };
    props.addToWorkout(exercise);
  };

  return (
    <div className="page-cover">
      <Modal isOpen={true}>
        <ModalHeader>Choose an exercise to add</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup tag="fieldset">
              {props.exercises.map(ex => {
                return (
                  <FormGroup key={props.exercises.indexOf(ex)} check>
                    <Label key={props.exercises.indexOf(ex)} check>
                      <Input
                        type="radio"
                        name="radio1"
                        data-id={ex._id}
                        key={props.exercises.indexOf(ex)}
                        onChange={e => {
                          setExerciseToAdd(e.target.dataset.id);
                        }} />
                      {ex.name}
                    </Label>
                  </FormGroup>
                )
                })
              }
            </FormGroup>
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
          <Button onClick={addToWorkout}>Save</Button>
          <Button onClick={props.closeModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
};

export default AddToWorkout;