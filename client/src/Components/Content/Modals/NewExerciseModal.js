import React from 'react';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class NewExerciseModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      muscleGroup: ''
    };
    this.setName = this.setName.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setMuscleGroup = this.setMuscleGroup.bind(this);
    this.saveNewExercise = this.saveNewExercise.bind(this);
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

  saveNewExercise(e) {
    this.props.saveNewExercise(this.state.name, this.state.description, this.state.muscleGroup);
  }

  render() {
    return (
      <div className="page-cover">
        <Modal isOpen={true}>
          <ModalHeader>New exercise</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" placeholder="Name" onChange={this.setName} />
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Input type="text" placeholder="Description" onChange={this.setDescription} />
              </FormGroup>
              <FormGroup>
                <Label>Muscle Group</Label>
                <Input type="text" placeholder="Muscle group" onChange={this.setMuscleGroup} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.saveNewExercise}>Save</Button>
            <Button onClick={this.props.closeModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
};

export default NewExerciseModal;