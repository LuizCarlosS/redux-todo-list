import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activities: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addActivity: (state, action) => {
      state.activities.push({
        id: Date.now(),
        text: action.payload,
        isCompleted: false,
      });
    },
    removeActivity: (state, action) => {
      state.activities = state.activities.filter(
        (activity) => activity.id !== action.payload
      );
    },
    toggleCompletion: (state, action) => {
      const activity = state.activities.find(
        (activity) => activity.id === action.payload
      );
      if (activity) {
        activity.isCompleted = !activity.isCompleted;
      }
    },
  },
});

export const { addActivity, removeActivity, toggleCompletion } = todoSlice.actions;
export default todoSlice.reducer;
