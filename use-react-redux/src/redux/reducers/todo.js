import axios from 'axios';

const initState = {
  items: []
};

const ADD_TODO = 'ADD_TODO';
const SET_TODOS = 'SET_TODOS';

const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

const setTodos = (items) => {
  return {
    type: SET_TODOS,
    payload: items
  };
};

const fetchTodos = () => async (dispatch) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
  dispatch(setTodos(res.data));
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case SET_TODOS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};

export { addTodo, setTodos, fetchTodos };
export default reducer;
