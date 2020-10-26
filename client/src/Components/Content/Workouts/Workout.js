import React, { useState } from 'react';
import WorkoutExercise from './WorkoutExercise';

import { ListGroup, ListGroupItem, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { MdMoreHoriz, MdExpandMore } from "react-icons/md";

const Workout = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

  const showAddToWorkout = e => {
    props.showAddToWorkout(props.workout);
  };

  const showDeleteModal = e => {
    props.showDeleteModal('workout', props.workout._id);
  };

  const removeWorkoutExercise = (workoutId, workoutExerciseId) => {
    props.removeWorkoutExercise(workoutId, workoutExerciseId);
  };

  const viewWorkout = () => {
    props.viewWorkout(props.workout);
  };

  return (
    <div>
      <ListGroup className="mb-3">
        <ListGroupItem className="workout-title bg-light d-flex justify-content-between align-items-center">
          <div className="start-section d-flex">
            <div className="workout-name fs-large">{props.workout.name}</div>
            <div className="workout-type-holder">
              <div>Type: <span className="workout-type text-primary">{props.workout.type}</span></div>
            </div>
            <div className="exercises-dropdown pointer mt-2" onClick={toggle}>Exercises <MdExpandMore className="scale-1-and-half" /></div>
          </div>
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle
              tag="span"
              data-toggle="dropdown"
              aria-expanded={dropdownOpen}>
              <MdMoreHoriz className="more-button scale-2 pointer" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={viewWorkout}>Workout details</DropdownItem>
              <DropdownItem divider/>
              <DropdownItem onClick={showAddToWorkout}>Add exercise</DropdownItem>
              <DropdownItem divider/>
              <DropdownItem onClick={showDeleteModal}>Delete workout</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </ListGroupItem>
        <Collapse isOpen={isOpen}>
          {
            props.workout.exercises.map(exercise => <WorkoutExercise
              key={props.workout.exercises.indexOf(exercise)}
              exercise={exercise}
              workoutId={props.workout._id}
              removeWorkoutExercise={removeWorkoutExercise}
              fetching={props.fetching} />)
          }
        </Collapse>
      </ListGroup>
    </div>
  )
};

export default Workout;