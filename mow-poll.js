import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import '@polymer/iron-icons/iron-icons.js';

import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-card/paper-card.js';

/**
 * `mow-poll`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MowPoll extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'mow-poll',
      },
    };
  }
}

window.customElements.define('mow-poll', MowPoll);
