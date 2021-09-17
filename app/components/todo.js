import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class Todo extends Component {
  @service redux;

  @tracked completed = this.args.completed;

  @action complete() {
    this.redux.dispatch({
      type: 'TOGGLE_TODO',
      id: this.args.id,
    });
  }
}
