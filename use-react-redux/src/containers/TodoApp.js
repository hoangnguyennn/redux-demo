import { connect } from 'react-redux';
import axios from 'axios';

import TodoApp from '../components/TodoApp';
import { addTodo, setTodos } from '../redux/reducers/todo';

const mapStateToProps = (state) => ({
  todos: state.todo.items
});

// Way 1: mapDispatchToProps as object
// const mapDispatchToProps = {
//   addTodo
// };

// Way 2: mapDispatchToProps as function
const mapDispatchToPropsAsFunction = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
  setTodos: (todos) => dispatch(setTodos(todos)),
  fetchTodos: async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    dispatch(setTodos(res.data));
  }
});

export default connect(mapStateToProps, mapDispatchToPropsAsFunction)(TodoApp);
