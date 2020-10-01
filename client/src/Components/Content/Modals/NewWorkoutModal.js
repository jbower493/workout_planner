import React from 'react';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';

class NewWorkoutModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      duration: '',
      type: ''
    };
    this.setName = this.setName.bind(this);
    this.setDuration = this.setDuration.bind(this);
    this.setType = this.setType.bind(this);
    this.saveNewWorkout = this.saveNewWorkout.bind(this);
  }

  setName(e) {
    this.setState({ name: e.target.value });
  }

  setDuration(e) {
    this.setState({ duration: e.target.value });
  }

  setType(e) {
    this.setState({ type: e.target.value });
  }

  saveNewWorkout(e) {
    this.props.saveNewWorkout(this.state.name, this.state.duration, this.state.type);
  }

  render() {
    let button;
    if(this.props.fetching) {
      button = <ModalFooter>
          <Spinner size="sm" color="secondary" />
        </ModalFooter>;
    } else {
      button = <ModalFooter>
          <Button onClick={this.saveNewWorkout}>Save</Button>
          <Button onClick={this.props.closeModal}>Cancel</Button>
        </ModalFooter>;
    }

    return (
      <div className="page-cover">
        <Modal isOpen={true}>
          <ModalHeader>New Workout</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" placeholder="Name" onChange={this.setName} />
              </FormGroup>
              <FormGroup>
                <Label>Duration</Label>
                <Input type="text" placeholder="Duration" onChange={this.setDuration} />
              </FormGroup>
              <FormGroup>
                <Label>Type</Label>
                <Input type="text" placeholder="Type" onChange={this.setType} />
              </FormGroup>
            </Form>
          </ModalBody>
          {button}
        </Modal>
      </div>
    )
  }
};

export default NewWorkoutModal;