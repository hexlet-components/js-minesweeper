// @flow

import InitState from './InitState';
import State from './State';

export default class extends State {

  template() {
    return `
      <h1>Go go go</h1>
      <form id="play-stop-form" action="">
        <input type="submit" name="" value="Stop">
      </form>
    `;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(InitState);
  }

  setupEvents() {
    const formElement = this.dom.getElementById('play-stop-form');
    formElement.addEventListener('submit', this.handle('submit'));
  }
}

