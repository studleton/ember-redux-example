import Component from '@glimmer/component';
import { connect } from 'ember-redux';

const stateToComputed = (state) => {
  return {
    visibilityFilter: state.visibilityFilter,
  };
};

class Footer extends Component {}

export default connect(stateToComputed)(Footer);
