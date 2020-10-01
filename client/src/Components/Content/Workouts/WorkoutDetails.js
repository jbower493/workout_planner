import React from 'react';

import BackButton from '../BackButton';

import { Button, ListGroupItem, Card, CardTitle, CardText, CardSubtitle, CardBody, CardHeader, CardFooter } from 'reactstrap';

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
        
        <ListGroupItem color="primary" className="d-flex justify-content-between">
          <div>
            <h4>{this.props.workout.name}</h4>
            <Button color="secondary" onClick={this.showEditWorkoutModal}>Edit</Button>
          </div>
          <div>
            <p>Type: {this.props.workout.type}</p>
            <p>Duration: {this.props.workout.duration} mins</p>
          </div>
        </ListGroupItem>
        <div className="row row-cols-1 row-cols-md-3 mt-4">
        {
          this.props.workout.exercises.map(exercise => {
            return (
              <div className="col mb-4">
                <Card className="card h-100">
                  <CardHeader>
                    <CardTitle className="d-flex justify-content-between">
                      <h4>{exercise.exercise.name}</h4>
                      <p className="text-primary">{exercise.exercise.muscleGroup}</p>
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <CardSubtitle className="text-primary mb-1">
                      <span className="mr-3">Reps: {exercise.reps}</span>
                      <span>Sets: {exercise.sets}</span>
                      <p>Weight: {exercise.weight}</p>
                    </CardSubtitle>
                    <CardText>{exercise.exercise.description}</CardText>
                  </CardBody>
                  <CardFooter>
                    <Button
                      color="secondary"
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