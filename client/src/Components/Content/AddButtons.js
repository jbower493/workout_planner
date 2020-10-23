import React from 'react';

import {
  Button
} from 'reactstrap';

const AddButtons = (props) => {
  return (
    <div className="button-holder mb-4 d-flex justify-content-between align-items-end">
      <div className="new-buttons">
        <Button color="primary" className="mr-3 top-new-button" onClick={props.showNewExercise} >New Exercise</Button>
        <Button color="primary" onClick={props.showNewWorkout} >New Workout</Button>
      </div>
      <div className="toggle-lists">
        <span
          className={props.active === 'workout list' ? 'text-primary ml-3' : 'text-body ml-3'}
          onClick={props.togglePage}>Workout List</span>
        <span> / </span>
        <span
          className={props.active === 'exercise list' ? 'text-primary' : 'text-body'}
          onClick={props.togglePage}>Exercise List</span>
      </div>
    </div>
  )
};

export default AddButtons;