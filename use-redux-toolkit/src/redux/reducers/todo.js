import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    setTodos: (state, action) => {
      state.items = action.payload;
    }
  }
});

const fetchTodos = () => async (dispatch) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
  dispatch(setTodos(res.data));
};

const { addTodo, setTodos } = todoSlice.actions;

export { addTodo, setTodos, fetchTodos };
export default todoSlice.reducer;
