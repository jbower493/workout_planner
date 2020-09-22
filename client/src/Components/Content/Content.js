import React from 'react';
import Axios from 'axios';

import WorkoutList from './Workouts/WorkoutList';
import AddButtons from './AddButtons';
import NewExerciseModal from './Modals/NewExerciseModal';
import NewWorkoutModal from './Modals/NewWorkoutModal';
import AddToWorkout from './Modals/AddToWorkout';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      modal: false,
      workouts: [],
      exercises: [],
      workoutToAddTo: null
    };
    this.showNewExercise = this.showNewExercise.bind(this);
    this.showNewWorkout = this.showNewWorkout.bind(this);
    this.showAddToWorkout = this.showAddToWorkout.bind(this);
    this.saveNewExercise = this.saveNewExercise.bind(this);
    this.saveNewWorkout = this.saveNewWorkout.bind(this);
    this.addToWorkout = this.addToWorkout.bind(this);
    this.deleteWorkout = this.deleteWorkout.bind(this);
  }

  resetState() {
    Axios({
      method: 'GET',
      withCredentials: true,
      url: `http://localhost:4500/get-workouts`
    })
      .then(res => {
        console.log(res.data)
        this.setState({ workouts: res.data.workouts });

        Axios({
          method: 'GET',
          withCredentials: true,
          url: `http://localhost:4500/get-exercises`
        })
          .then(res => {
            console.log(res.data)
            this.setState({
              exercises: res.data.exercises,
              loading: false
            });
          })
      })
  }

  componentDidMount() {
    this.resetState();
  }

  showNewExercise() {
    this.setState({ modal: 'new exercise' });
  }

  showNewWorkout() {
    this.setState({ modal: 'new workout' });
  }

  showAddToWorkout(workout) {
    this.setState({
      modal: 'add to workout',
      workoutToAddTo: workout
    });
    console.log(workout)
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
          this.resetState()
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
        this.resetState()
      })
  }

  addToWorkout(exercise) {
    Axios({
      method: 'POST',
      url: `http://localhost:4500/add-to-workout/${this.state.workoutToAddTo._id}`,
      withCredentials: true,
      data: exercise
    })
      .then(res => {
        console.log(res.data);
        this.setState({
          modal: false,
          workoutToAddTo: null
        });
        this.resetState();
      })
  }

  deleteWorkout(workout) {
    Axios({
      method: 'DELETE',
      url: `http://localhost:4500/workout/${workout._id}`,
      withCredentials: true
    })
      .then(res => {
        if(res.data.success) {
          this.resetState();
        }
      })
  }

  render() {
    let modal = null;
    if(this.state.modal === 'new exercise') {
      modal = <NewExerciseModal saveNewExercise={this.saveNewExercise} />;
    } else if(this.state.modal === 'new workout') {
      modal = <NewWorkoutModal saveNewWorkout={this.saveNewWorkout} />;
    } else if(this.state.modal === 'add to workout') {
      modal = <AddToWorkout addToWorkout={this.addToWorkout} exercises={this.state.exercises} />
    }

    return (
      <div>
        <AddButtons showNewExercise={this.showNewExercise} showNewWorkout={this.showNewWorkout} />
        <WorkoutList
          workouts={this.state.workouts}
          user={this.props.user}
          showAddToWorkout={this.showAddToWorkout}
          deleteWorkout={this.deleteWorkout} />
        {modal}
      </div>
    )
  }
};

export default Content;