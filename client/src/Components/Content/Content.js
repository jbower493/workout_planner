import React from 'react';
import Axios from 'axios';

import WorkoutList from './Workouts/WorkoutList';
import AddButtons from './AddButtons';
import NewExerciseModal from './Modals/NewExerciseModal';
import NewWorkoutModal from './Modals/NewWorkoutModal';
import AddToWorkout from './Modals/AddToWorkout';
import EditExerciseModal from './Modals/EditExerciseModal';
import ConfirmDeleteModal from './Modals/ConfirmDeleteModal';
import WorkoutDetails from './Workouts/WorkoutDetails';
import ExerciseList from './Exercises/ExerciseList';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      modal: false,
      page: 'workout list',
      workouts: [],
      exercises: [],
      workoutToAddTo: null,
      workoutToView: null,
      exerciseToEdit: null,
      exerciseToDelete: null,
      workoutToDelete: null
    };
    this.showNewExercise = this.showNewExercise.bind(this);
    this.showNewWorkout = this.showNewWorkout.bind(this);
    this.showAddToWorkout = this.showAddToWorkout.bind(this);
    this.showEditExercise = this.showEditExercise.bind(this);
    this.saveNewExercise = this.saveNewExercise.bind(this);
    this.saveNewWorkout = this.saveNewWorkout.bind(this);
    this.addToWorkout = this.addToWorkout.bind(this);
    this.saveEditedExercise = this.saveEditedExercise.bind(this);
    this.deleteWorkout = this.deleteWorkout.bind(this);
    this.removeWorkoutExercise = this.removeWorkoutExercise.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.togglePage = this.togglePage.bind(this);
    this.viewWorkout = this.viewWorkout.bind(this);
    this.backToDashboard = this.backToDashboard.bind(this);
    this.showDeleteModal = this.showDeleteModal.bind(this);
    this.deleteExercise = this.deleteExercise.bind(this);
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

  showEditExercise(exercise) {
    this.setState({
      modal: 'edit exercise',
      exerciseToEdit: exercise
    });
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

  saveEditedExercise(id, name, description, muscleGroup) {
    Axios({
      method: 'POST',
      url: `http://localhost:4500/edit-exercise/${id}`,
      withCredentials: true,
      data: {
        name,
        description,
        muscleGroup
      }
    })
      .then(res => {
        console.log(res.data);
        this.setState({
          modal: false,
          exerciseToEdit: null
        });
        this.resetState();
      })
  }

  deleteWorkout() {
    Axios({
      method: 'DELETE',
      url: `http://localhost:4500/workout/${this.state.workoutToDelete._id}`,
      withCredentials: true
    })
      .then(res => {
        if(res.data.success) {
          this.setState({
            modal: false,
            workoutToDelete: null
          });
          this.resetState();
        }
      })
  }

  removeWorkoutExercise(workoutId, workoutExerciseId) {
    Axios({
      method: 'DELETE',
      url: `http://localhost:4500/workout-exercise/${workoutExerciseId}/${workoutId}`,
      withCredentials: true
    })
      .then(res => {
        if(res.data.success) {
          this.resetState();
        }
      })
  }

  closeModal() {
    this.setState({ modal: false });
  }

  togglePage() {
    this.state.page === 'workout list' ? this.setState({ page: 'exercise list' }) : this.setState({ page: 'workout list' });
  }

  viewWorkout(workout) {
    this.setState({
      workoutToView: workout,
      page: 'workout details'
    });
  }

  backToDashboard() {
    this.setState({ page: 'workout list' });
  }

  showDeleteModal(deleteWhat, idToDel) {
    if(deleteWhat === 'exercise') {
      this.setState({ exerciseToDelete: idToDel });
    } else {
      this.setState({ workoutToDelete: idToDel });
    }
    this.setState({
      modal: 'confirm delete'
    });
  }

  deleteExercise() {
    Axios({
      method: 'DELETE',
      url: `http://localhost:4500/exercise/${this.state.exerciseToDelete._id}`,
      withCredentials: true
    })
      .then(res => {
        if(res.data.success) {
          console.log(res.data)
          this.setState({
            modal: false,
            workoutToDelete: null
          });
          this.resetState();
        }
      })
  }

  render() {
    let page = null;
    if(this.state.page === 'workout list') {
      page = <div>
        <AddButtons
          showNewExercise={this.showNewExercise}
          showNewWorkout={this.showNewWorkout}
          togglePage={this.togglePage}
          active={this.state.page} />
        <WorkoutList
          workouts={this.state.workouts}
          user={this.props.user}
          showAddToWorkout={this.showAddToWorkout}
          showDeleteModal={this.showDeleteModal}
          removeWorkoutExercise={this.removeWorkoutExercise}
          viewWorkout={this.viewWorkout} />
      </div>;
    } else if(this.state.page === 'workout details') {
      page = <WorkoutDetails
        workout={this.state.workoutToView}
        backToDashboard={this.backToDashboard} />;
    } else if(this.state.page === 'exercise list') {
      page = <div>
        <AddButtons
          showNewExercise={this.showNewExercise}
          showNewWorkout={this.showNewWorkout}
          togglePage={this.togglePage}
          active={this.state.page} />
        <ExerciseList
          exercises={this.state.exercises}
          showEditExercise={this.showEditExercise}
          showDeleteModal={this.showDeleteModal} />
      </div>;
    }

    let modal = null;
    if(this.state.modal === 'new exercise') {
      modal = <NewExerciseModal saveNewExercise={this.saveNewExercise} closeModal={this.closeModal} />;
    } else if(this.state.modal === 'new workout') {
      modal = <NewWorkoutModal saveNewWorkout={this.saveNewWorkout} closeModal={this.closeModal} />;
    } else if(this.state.modal === 'add to workout') {
      modal = <AddToWorkout addToWorkout={this.addToWorkout} exercises={this.state.exercises} closeModal={this.closeModal} />
    } else if(this.state.modal === 'edit exercise') {
      modal = <EditExerciseModal
        exercise={this.state.exerciseToEdit}
        saveEditedExercise={this.saveEditedExercise}
        closeModal={this.closeModal} />
    } else if(this.state.modal === 'confirm delete') {
      modal = <ConfirmDeleteModal
        exerciseToDelete={this.state.exerciseToDelete}
        workoutToDelete={this.state.workoutToDelete}
        deleteWorkout={this.deleteWorkout}
        deleteExercise={this.deleteExercise}
        closeModal={this.closeModal} />
    }

    return (
      <div>
        {page}
        {modal}
      </div>
    )
  }
};

export default Content;