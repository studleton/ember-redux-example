import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AddTodo extends Component {
  @service redux;

  @tracked text = '';
  nextTodoId = 0;

  @action add() {
    this.redux.dispatch({
      type: 'ADD_TODO',
      text: this.text,
      id: this.nextTodoId,
    });
    this.nextTodoId++;
    this.text = '';
  }

  @action enter(e) {
    if (e.key === 'Enter' || e.code === 'Enter') {
      this.add();
    }
  }
}
