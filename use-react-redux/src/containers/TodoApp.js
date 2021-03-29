import { connect } from 'react-redux';

import TodoApp from '../components/TodoApp';
import { addTodo } from '../redux/reducers/todo';

const mapStateToProps = (state) => ({
  todos: state.todo.items
});

const mapDispatchToProps = {
  addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
