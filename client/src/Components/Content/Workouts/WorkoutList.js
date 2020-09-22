import React from 'react';
import Workout from './Workout';

class WorkoutList extends React.Component {
  constructor(props) {
    super(props);
    this.showAddToWorkout = this.showAddToWorkout.bind(this);
    this.deleteWorkout = this.deleteWorkout.bind(this);
    this.removeWorkoutExercise = this.removeWorkoutExercise.bind(this);
  }

  showAddToWorkout(workout) {
    this.props.showAddToWorkout(workout);
  }

  deleteWorkout(workout) {
    this.props.deleteWorkout(workout);
  }

  removeWorkoutExercise(workoutId, workoutExerciseId) {
    this.props.removeWorkoutExercise(workoutId, workoutExerciseId);
  }

  render() {
    return (
      <div className="workout-list">
        <h2>{this.props.user.username}</h2>
        {this.props.workouts.map(workout => <Workout
          key={this.props.workouts.indexOf(workout)}
          workout={workout}
          showAddToWorkout={this.showAddToWorkout}
          deleteWorkout={this.deleteWorkout}
          removeWorkoutExercise={this.removeWorkoutExercise} />)
        }
      </div>
    )
  }
};

export default WorkoutList;