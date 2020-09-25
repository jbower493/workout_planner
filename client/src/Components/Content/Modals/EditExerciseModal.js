import React from 'react';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class EditExerciseModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.exercise.name,
      description: this.props.exercise.description,
      muscleGroup: this.props.exercise.muscleGroup
    };
    this.setName = this.setName.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setMuscleGroup = this.setMuscleGroup.bind(this);
    this.saveEditedExercise = this.saveEditedExercise.bind(this);
  }

  setName(e) {
    this.setState({ name: e.target.value});
  }

  setDescription(e) {
    this.setState({ description: e.target.value });
  }

  setMuscleGroup(e) {
    this.setState({ muscleGroup: e.target.value });
  }

  saveEditedExercise(e) {
    this.props.saveEditedExercise(this.props.exercise._id, this.state.name, this.state.description, this.state.muscleGroup);
  }

  render() {
    return (
      <div className="page-cover">
        <Modal isOpen={true}>
          <ModalHeader>Edit Exercise</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" value={this.state.name} onChange={this.setName} />
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Input type="text" value={this.state.description} onChange={this.setDescription} />
              </FormGroup>
              <FormGroup>
                <Label>Muscle Group</Label>
                <Input type="text" value={this.state.muscleGroup} onChange={this.setMuscleGroup} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.saveEditedExercise}>Save</Button>
            <Button onClick={this.props.closeModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
};

export default EditExerciseModal;