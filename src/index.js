// @flow

import State from './states/State';
import InitState from './states/InitState';

export class Game {
  constructor(element) {
    this.state = new InitState();
    this.element = element;
  }

  setState(Klass: State) {
    this.state = new Klass(this, document);
  }

  run() {
    this.setState(InitState);
    this.render();
  }

  render() {
    this.element.innerHTML = this.state.template();
    this.state.setupEvents();
  }
}
