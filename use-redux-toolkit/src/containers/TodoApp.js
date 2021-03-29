import { connect } from 'react-redux';

import TodoApp from '../components/TodoApp';
import { addTodo, setTodos, fetchTodos } from '../redux/reducers/todo';

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
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(mapStateToProps, mapDispatchToPropsAsFunction)(TodoApp);
