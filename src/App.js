import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addActivity, removeActivity, toggleCompletion } from './redux/todoSlice';
import './App.css';

const App = () => {
  const [activityText, setActivityText] = useState('');
  const activities = useSelector((state) => state.todo.activities);
  const dispatch = useDispatch();

  const handleAddActivity = () => {
    if (activityText.trim() !== '') {
      dispatch(addActivity(activityText));
      setActivityText('');
    }
  };

  const handleRemoveActivity = (id) => {
    dispatch(removeActivity(id));
  };

  const handleToggleCompletion = (id) => {
    dispatch(toggleCompletion(id));
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={activityText}
        onChange={(e) => setActivityText(e.target.value)}
        placeholder="Add new activity..."
      />
      <button className="add" onClick={handleAddActivity}>
        Add Activity
      </button>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <span
              className={activity.isCompleted ? 'completed' : ''}
              onClick={() => handleToggleCompletion(activity.id)}
            >
              {activity.text}
            </span>
            <button className="remove" onClick={() => handleRemoveActivity(activity.id)}>
                  Remove
            </button>
            {!activity.isCompleted && (
              <div>
                <button className="done" onClick={() => handleToggleCompletion(activity.id)}>
                  Done
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
