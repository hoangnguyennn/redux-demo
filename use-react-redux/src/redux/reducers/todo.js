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

export { addTodo, setTodos };
export default reducer;
