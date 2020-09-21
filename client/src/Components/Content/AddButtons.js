import React from 'react';

const AddButtons = (props) => {
  return (
    <div className="button-holder">
      <div className="add-button" onClick={props.showNewExercise} >New Exercise</div>
      <div className="add-button" onClick={props.showNewWorkout} >New Workout</div>
    </div>
  )
};

export default AddButtons;