import React, { useState } from 'react';

const AddToWorkout = (props) => {
  const [reps, setReps] = useState(10);
  const [sets, setSets] = useState(3);
  const [weight, setWeight] = useState('');

  const addToWorkout = (e) => {
    const exerciseId = e.target.dataset.id;

    const exercise = {
      exercise: exerciseId,
      reps,
      sets,
      weight 
    };
    props.addToWorkout(exercise);
  };

  return (
    <div className="page-cover">
      <div className="exercises-to-add modal">
        <h3>Exercises to add</h3>
        <small>Reps</small>
        <input type="number" value={reps} onChange={e => setReps(e.target.value)} />
        <small>Sets</small>
        <input type="number" value={sets} onChange={e => setSets(e.target.value)} />
        <small>Weight</small>
        <input type="text" value={weight} onChange={e => setWeight(e.target.value)} />
        {props.exercises.map(ex => <p
          data-id={ex._id}
          key={props.exercises.indexOf(ex)}
          onClick={addToWorkout} >
          {ex.name}</p>)
        }
      </div>
    </div>
  )
};

export default AddToWorkout;