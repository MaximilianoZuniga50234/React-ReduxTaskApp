import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Description 1",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Description 2",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const foundedTask = state.find((task) => task.id === action.payload);
      if (foundedTask) {
        state.splice(state.indexOf(foundedTask), 1);
      }
    },
    updateTask: (state, action) => {
      const { id, title, description } = action.payload;
      const foundedTask = state.find((task) => task.id === id);
      if (foundedTask) {
        foundedTask.title = title;
        foundedTask.description = description;
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
