import React from 'react';

class WorkoutDetails extends React.Component {
  render() {
    return (
      <h1>{this.props.workout.name}</h1>
    )
  }
};

export default WorkoutDetails;