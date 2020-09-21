import React from 'react';

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
        <div className="new-exercise-modal">
          <h3>New exercise</h3>
          <input type="text" placeholder="Name" onChange={this.setName} />
          <input type="text" placeholder="Description" onChange={this.setDescription} />
          <input type="text" placeholder="Muscle group" onChange={this.setMuscleGroup} />
          <button onClick={this.saveNewExercise}>Save</button>
        </div>
      </div>
    )
  }
};

export default NewExerciseModal;