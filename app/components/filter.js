import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LinkComponent extends Component {
  @service redux;

  @tracked active = this.args.active;
  text = 'all';

  @action click() {
    this.redux.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: this.args.filter,
    });
  }

  get isNotActive() {
    return this.args.visibilityFilter !== this.args.filter;
  }
}
