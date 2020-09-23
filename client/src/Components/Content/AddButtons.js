import React from 'react';

import {
  Button
} from 'reactstrap';

const AddButtons = (props) => {
  return (
    <div className="button-holder w-75 ml-auto mr-auto mb-4">
      <Button className="mr-3" onClick={props.showNewExercise} >New Exercise</Button>
      <Button onClick={props.showNewWorkout} >New Workout</Button>
    </div>
  )
};

export default AddButtons;