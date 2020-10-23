import React from 'react';

import BackButton from '../BackButton';

import { Button, ListGroupItem, Card, CardTitle, CardText, CardSubtitle, CardBody, CardHeader, CardFooter } from 'reactstrap';

import { MdWatchLater } from "react-icons/md";

class WorkoutDetails extends React.Component {
  constructor(props) {
    super(props);
    this.showEditWorkoutModal = this.showEditWorkoutModal.bind(this);
  }

  showEditWorkoutModal(e) {
    this.props.showEditWorkoutModal(this.props.workout);
  }

  render() {
    return (
      <div>
        <BackButton backToDashboard={this.props.backToDashboard} />
        
        <ListGroupItem className="bg-light d-flex justify-content-between">
          <div>
            <div className="fs-large">{this.props.workout.name}</div>
            <div>Type: <span className="text-primary">{this.props.workout.type}</span></div>
            <div className="d-flex align-items-center"><MdWatchLater className="mr-1" /> <span className="text-primary">{this.props.workout.duration} mins</span></div>
          </div>
          <Button className="details-edit-button" color="primary" onClick={this.showEditWorkoutModal}>Edit</Button>
        </ListGroupItem>
        <div className="row row-cols-1 row-cols-md-3 mt-4">
        {
          this.props.workout.exercises.map(exercise => {
            return (
              <div className="col mb-4">
                <Card className="card h-100">
                  <CardHeader>
                    <CardTitle className="d-flex justify-content-between">
                      <div className="fs-large">{exercise.exercise.name}</div>
                      <div className="text-primary">{exercise.exercise.muscleGroup}</div>
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <CardSubtitle className="mb-3">
                      <span className="mr-3">Reps: <span className="text-primary">{exercise.reps}</span></span>
                      <span>Sets: <span className="text-primary">{exercise.sets}</span></span>
                      <div>Weight: <span className="text-primary">{exercise.weight}</span></div>
                    </CardSubtitle>
                    <CardText className="text-muted">{exercise.exercise.description}</CardText>
                  </CardBody>
                  <CardFooter>
                    <Button
                      className="float-right"
                      color="primary"
                      onClick={() => this.props.showEditWorkoutExerciseModal({
                        workoutId: this.props.workout._id,
                        workoutExercise: exercise
                      })}>Edit</Button>
                  </CardFooter>
                </Card>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
};

export default WorkoutDetails;