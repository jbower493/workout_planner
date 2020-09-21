import React from 'react';
import Workout from './Workout';

class WorkoutList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.user.username}</h2>
        {this.props.workouts.map(workout => <Workout key={this.props.workouts.indexOf(workout)} workout={workout} />)}
      </div>
    )
  }
};

export default WorkoutList;