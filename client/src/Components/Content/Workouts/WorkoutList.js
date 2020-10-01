import React from 'react';
import Workout from './Workout';

class WorkoutList extends React.Component {
  constructor(props) {
    super(props);
    this.showAddToWorkout = this.showAddToWorkout.bind(this);
    this.removeWorkoutExercise = this.removeWorkoutExercise.bind(this);
    this.viewWorkout = this.viewWorkout.bind(this);
  }

  showAddToWorkout(workout) {
    this.props.showAddToWorkout(workout);
  }

  removeWorkoutExercise(workoutId, workoutExerciseId) {
    this.props.removeWorkoutExercise(workoutId, workoutExerciseId);
  }

  viewWorkout(workout) {
    this.props.viewWorkout(workout);
  }

  render() {
    return (
      <div>
        {this.props.workouts.map(workout => <Workout
          key={this.props.workouts.indexOf(workout)}
          workout={workout}
          showAddToWorkout={this.showAddToWorkout}
          showDeleteModal={this.props.showDeleteModal}
          removeWorkoutExercise={this.removeWorkoutExercise}
          viewWorkout={this.viewWorkout}
          fetching={this.props.fetching} />)
        }
      </div>
    )
  }
};

export default WorkoutList;