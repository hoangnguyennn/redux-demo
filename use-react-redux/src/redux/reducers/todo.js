const initState = {
  items: []
};

const ADD_TODO = 'ADD_TODO';

const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
};

export { addTodo };
export default reducer;
