import Component from '@glimmer/component';
import { connect } from 'ember-redux';

const stateToComputed = (state) => {
  return {
    visibleTodos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter((t) => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter((t) => !t.completed);
  }
};

class TodoList extends Component {}

export default connect(stateToComputed)(TodoList);
