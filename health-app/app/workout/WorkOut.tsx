'use client'

import React, { useState } from 'react';
import axios from 'axios';
import './Sources/Workout.css';

const Workout = () => {
  const [selectedCharacter, setSelectedCharacter] = useState('A');
  const [reps, setReps] = useState('');
  const [error, setError] = useState('');

  const handleCharacterChange = (e :any) => {
    setSelectedCharacter(e.target.value);
  };

  const handleRepsChange = (e :any) => {
    setReps(e.target.value);
  };

  const sendDataToFlask = () => {
    if (selectedCharacter && reps) {
      const dataToSend = {
        exercise_type: selectedCharacter,
        exercise_goal: parseInt(reps),
      };

      axios.post('http://localhost:5000/perform-exercise', dataToSend)
        .then((response) => {
          console.log('Started the exercise', response.data.message);
        })
        .catch((error) => {
          console.error('Error performing exercise:', error);
        });
    } else {
      setError('Please fill in all fields.');
    }
  };

  return (
    <div className="not-found">
      <div className="display-text">
        <h1>Start Exercising</h1>
        <p>Choose Exercise, Then enter the number of Squats/Curls to Complete, Click Submit and Enjoy!!!</p>

        <select value={selectedCharacter} onChange={handleCharacterChange}>
          <option value="A">Character A</option>
          <option value="B">Character B</option>
        </select>

        <input
          type="number"
          placeholder="Enter Reps"
          value={reps}
          onChange={handleRepsChange}
        />

        <button onClick={sendDataToFlask}>Submit</button>

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Workout;