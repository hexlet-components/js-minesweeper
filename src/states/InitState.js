// @flow

import PlayState from './PlayState';
import State from './State';

export default class extends State {

  template() {
    return `
      <h1>Welcome to The Minesweeper</h1>
      <form id="init-form" action="">
        <input type="submit" name="" value="Start">
      </form>
    `;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(PlayState);
  }

  setupEvents() {
    const formElement = this.dom.getElementById('init-form');
    formElement.addEventListener('submit', this.handle('submit'));
  }
}
