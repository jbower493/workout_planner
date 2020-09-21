import React from 'react';
import Axios from 'axios';

import WorkoutList from './Workouts/WorkoutList';
import AddButtons from './AddButtons';
import NewExerciseModal from './Modals/NewExerciseModal';
import NewWorkoutModal from './Modals/NewWorkoutModal';

const workouts = [
  {
    name: 'Big arms',
    duration: '60 mins',
    type: 'upper body',
    exercises: [
      {
        name: 'pressups',
        muscleGroup: 'chest',
        reps: 10,
        sets: 3,
        weight: 'bodyweight'
      },
      {
        name: 'shoulder press',
        muscleGroup: 'shoulders',
        reps: 8,
        sets: 3,
        weight: '20kg db\'s'
      }
    ]
  },
  {
    name: 'Leg workout',
    duration: '40 mins',
    type: 'lower body',
    exercises: [
      {
        name: 'squats',
        muscleGroup: 'glutes',
        reps: 6,
        sets: 3,
        weight: '70kg'
      },
      {
        name: 'box jumps',
        muscleGroup: 'glutes',
        reps: 15,
        sets: 3,
        weight: 'bodyweight'
      }
    ]
  }
];

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.showNewExercise = this.showNewExercise.bind(this);
    this.showNewWorkout = this.showNewWorkout.bind(this);
    this.saveNewExercise = this.saveNewExercise.bind(this);
    this.saveNewWorkout = this.saveNewWorkout.bind(this);
  }

  showNewExercise() {
    this.setState({ modal: 'new exercise' });
  }

  showNewWorkout() {
    this.setState({ modal: 'new workout' });
  }

  saveNewExercise(name, description, muscleGroup) {
    Axios({
      method: 'POST',
      url: 'http://localhost:4500/new-exercise',
      withCredentials: true,
      data: {
        name,
        description,
        muscleGroup
      }
    })
      .then(res => {
        console.log(res.data);
        if(res.data.success) {
          this.setState({ modal: false });
        }
      })
  }

  saveNewWorkout(name, duration, type) {
    Axios({
      method: 'POST',
      url: 'http://localhost:4500/new-workout',
      withCredentials: true,
      data: {
        name,
        duration,
        type
      }
    })
      .then(res => {
        console.log(res.data);
        if(res.data.success) {
          this.setState({ modal: false });
        }
      })
  }

  render() {
    let modal = null;
    if(this.state.modal === 'new exercise') {
      modal = <NewExerciseModal saveNewExercise={this.saveNewExercise} />;
    } else if(this.state.modal === 'new workout') {
      modal = <NewWorkoutModal saveNewWorkout={this.saveNewWorkout} />;
    }

    return (
      <div>
        <AddButtons showNewExercise={this.showNewExercise} showNewWorkout={this.showNewWorkout} />
        <WorkoutList workouts={workouts} user={this.props.user} />
        {modal}
      </div>
    )
  }
};

export default Content;