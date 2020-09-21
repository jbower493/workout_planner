import React from 'react';

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
    return (
      <div className="page-cover">
        <div className="new-workout-modal">
          <h3>New workout</h3>
          <input type="text" placeholder="Name" onChange={this.setName} />
          <input type="number" placeholder="Duration" onChange={this.setDuration} />
          <input type="text" placeholder="Type" onChange={this.setType} />
          <button onClick={this.saveNewWorkout}>Save</button>
        </div>
      </div>
    )
  }
};

export default NewWorkoutModal;