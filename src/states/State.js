// @flow

import _ from 'lodash';

export default class {
  constructor(game, dom) {
    this.game = game;
    this.dom = dom;
  }

  setState(Klass) {
    this.game.setState(Klass);
  }

  handle(action) {
    return (event) => {
      const functionName = `handle${_.capitalize(action)}`;
      this[functionName](event);
      this.game.render();
    };
  }
}
