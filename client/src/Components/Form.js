import React from 'react';

class Form extends React.Component {

  handleSend() {
    const newExercise = {
      name: document.getElementById('exercise-name').value,
      description: document.getElementById('exercise-description').value,
      type: document.getElementById('exercise-type').value
    };
    const payload = JSON.stringify(newExercise);

    fetch('http://localhost:4500/new-exercise', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload
    })
      .then(res => res.json())
      .then(data => {
        document.getElementById('response').innerText = 'Success';
        console.log(data);
      })
      .catch(e => {
        document.getElementById('response').innerText = 'Failure';
        console.log(e);
      })
  }

  render() {
    return (
      <div className="form">
        <h2>New Exercise</h2>
        <input id="exercise-name" type="text" placeholder="Name" />
        <input id="exercise-description" type="text" placeholder="Description" />
        <select id="exercise-type" placeholder="Type">
          <option>Chest</option>
          <option>Back</option>
          <option>Shoulders</option>
          <option>Legs</option>
          <option>Core</option>
          <option>Cardio</option>
          <option>Flexibility</option>
        </select>
        <button id="send" onClick={this.handleSend}>Save</button>
        <div id="response"></div>
      </div>
    )
  }
}

export default Form;