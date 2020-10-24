import React from 'react';
import Axios from 'axios';

import WorkoutList from './Workouts/WorkoutList';
import AddButtons from './AddButtons';
import NewExerciseModal from './Modals/NewExerciseModal';
import NewWorkoutModal from './Modals/NewWorkoutModal';
import AddToWorkout from './Modals/AddToWorkout';
import EditExerciseModal from './Modals/EditExerciseModal';
import ConfirmDeleteModal from './Modals/ConfirmDeleteModal';
import EditWorkoutModal from './Modals/EditWorkoutModal';
import EditWorkoutExerciseModal from './Modals/EditWorkoutExerciseModal';
import WorkoutDetails from './Workouts/WorkoutDetails';
import ExerciseList from './Exercises/ExerciseList';

import { Spinner } from 'reactstrap';

import { url } from '../../App';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      fetching: false,
      modal: false,
      page: 'workout list',
      workouts: [],
      exercises: [],
      workoutToAddTo: null,
      workoutToView: null,
      exerciseToEdit: null,
      exerciseToDelete: null,
      workoutToDelete: null,
      workoutToEdit: null,
      workoutExerciseToEdit: null
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
    this.showEditWorkoutExerciseModal = this.showEditWorkoutExerciseModal.bind(this);
    this.showEditWorkoutModal = this.showEditWorkoutModal.bind(this);
    this.editWorkout = this.editWorkout.bind(this);
    this.editWorkoutExercise = this.editWorkoutExercise.bind(this);
  }

  resetState(workoutBeingViewedId) {
    Axios({
      method: 'GET',
      withCredentials: true,
      url: `${url}/get-workouts`
    })
      .then(res => {
        console.log(res.data)
        this.setState({ workouts: res.data.workouts });

        if(workoutBeingViewedId) {
          const newWorkout = res.data.workouts.find(workout => workout._id === workoutBeingViewedId);
          this.setState({ workoutToView: newWorkout });
        }

        Axios({
          method: 'GET',
          withCredentials: true,
          url: `${url}/get-exercises`
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
    this.setState({ fetching: true });
    Axios({
      method: 'POST',
      url: `${url}/new-exercise`,
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
        this.setState({ fetching: false });
      })
  }

  saveNewWorkout(name, duration, type) {
    this.setState({ fetching: true });
    Axios({
      method: 'POST',
      url: `${url}/new-workout`,
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
        this.setState({ fetching: false });
        this.resetState()
      })
  }

  addToWorkout(exercise) {
    this.setState({ fetching: true });
    Axios({
      method: 'POST',
      url: `${url}/add-to-workout/${this.state.workoutToAddTo._id}`,
      withCredentials: true,
      data: exercise
    })
      .then(res => {
        console.log(res.data);
        this.setState({
          modal: false,
          workoutToAddTo: null
        });
        this.setState({ fetching: false });
        this.resetState();
      })
  }

  saveEditedExercise(id, name, description, muscleGroup) {
    this.setState({ fetching: true });
    Axios({
      method: 'POST',
      url: `${url}/edit-exercise/${id}`,
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
        this.setState({ fetching: false });
        this.resetState();
      })
  }

  deleteWorkout() {
    this.setState({ fetching: true });
    Axios({
      method: 'DELETE',
      url: `${url}/workout/${this.state.workoutToDelete}`,
      withCredentials: true
    })
      .then(res => {
        if(res.data.success) {
          this.setState({
            modal: false,
            workoutToDelete: null
          });
          this.setState({ fetching: false });
          this.resetState();
        }
      })
  }

  removeWorkoutExercise(workoutId, workoutExerciseId) {
    this.setState({ fetching: true });
    Axios({
      method: 'DELETE',
      url: `${url}/workout-exercise/${workoutExerciseId}/${workoutId}`,
      withCredentials: true
    })
      .then(res => {
        if(res.data.success) {
          this.resetState();
        }
        this.setState({ fetching: false });
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
    this.setState({ fetching: true });
    Axios({
      method: 'DELETE',
      url: `${url}/exercise/${this.state.exerciseToDelete._id}`,
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
        this.setState({ fetching: false });
      })
  }

  showEditWorkoutModal(workout) {
    this.setState({
      modal: 'edit workout',
      workoutToEdit: workout
    });
    console.log(workout)
  }

  showEditWorkoutExerciseModal(workoutExercise) {
    // pass in workout exercise as an object with workoutExerciseId and workoutId as properties, so I dont have to set 2 different states
    this.setState({
      modal: 'edit workout exercise',
      workoutExerciseToEdit: workoutExercise
    });
    console.log(workoutExercise);
  }

  editWorkout(name, duration, type) {
    this.setState({ fetching: true });
    Axios({
      method: 'POST',
      withCredentials: true,
      url: `${url}/edit-workout/${this.state.workoutToEdit._id}`,
      data: {
        name,
        duration,
        type
      }
    })
      .then(res => {
        if(res.data.success) {
          console.log(res.data)
          const id = this.state.workoutToEdit._id;
          this.setState({
            modal: false,
            workoutToEdit: null
          });
          this.resetState(id);
        }
        this.setState({ fetching: false });
        console.log(res.data);
      })
  }

  editWorkoutExercise(reps, sets, weight) {
    this.setState({ fetching: true });
    Axios({
      method: 'POST',
      withCredentials: true,
      url: `${url}/edit-workout-exercise/${this.state.workoutExerciseToEdit.workoutId}/${this.state.workoutExerciseToEdit.workoutExercise._id}`,
      data: {
        reps,
        sets,
        weight
      }
    })
      .then(res => {
        if(res.data.success) {
          console.log(res.data)
          const id = this.state.workoutExerciseToEdit.workoutId;
          this.setState({
            modal: false,
            workoutExerciseToEdit: null
          });
          this.resetState(id);
        }
        this.setState({ fetching: false });
        console.log(res.data);
      })
  }

  render() {
    let page = null;
    if(this.state.loading) {
      page = <div className="loading"><Spinner size="md" color="secondary" /></div>
    } else if(this.state.page === 'workout list') {
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
          viewWorkout={this.viewWorkout}
          fetching={this.state.fetching} />
      </div>;
    } else if(this.state.page === 'workout details') {
      page = <WorkoutDetails
        workout={this.state.workoutToView}
        backToDashboard={this.backToDashboard}
        showEditWorkoutExerciseModal={this.showEditWorkoutExerciseModal}
        showEditWorkoutModal={this.showEditWorkoutModal} />;
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
      modal = <NewExerciseModal
        saveNewExercise={this.saveNewExercise}
        closeModal={this.closeModal}
        fetching={this.state.fetching} />;
    } else if(this.state.modal === 'new workout') {
      modal = <NewWorkoutModal
        saveNewWorkout={this.saveNewWorkout}
        closeModal={this.closeModal}
        fetching={this.state.fetching} />;
    } else if(this.state.modal === 'add to workout') {
      modal = <AddToWorkout
        addToWorkout={this.addToWorkout}
        exercises={this.state.exercises}
        closeModal={this.closeModal}
        fetching={this.state.fetching} />
    } else if(this.state.modal === 'edit exercise') {
      modal = <EditExerciseModal
        exercise={this.state.exerciseToEdit}
        saveEditedExercise={this.saveEditedExercise}
        closeModal={this.closeModal}
        fetching={this.state.fetching} />
    } else if(this.state.modal === 'confirm delete') {
      modal = <ConfirmDeleteModal
        exerciseToDelete={this.state.exerciseToDelete}
        workoutToDelete={this.state.workoutToDelete}
        deleteWorkout={this.deleteWorkout}
        deleteExercise={this.deleteExercise}
        closeModal={this.closeModal}
        fetching={this.state.fetching} />
    } else if(this.state.modal === 'edit workout') {
      modal = <EditWorkoutModal
        workoutToEdit={this.state.workoutToEdit}
        editWorkout={this.editWorkout}
        closeModal={this.closeModal}
        fetching={this.state.fetching} />;
    } else if(this.state.modal === 'edit workout exercise') {
      modal = <EditWorkoutExerciseModal
        workoutExerciseToEdit={this.state.workoutExerciseToEdit}
        editWorkoutExercise={this.editWorkoutExercise}
        closeModal={this.closeModal}
        fetching={this.state.fetching} />;
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