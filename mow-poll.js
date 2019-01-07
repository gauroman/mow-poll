import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

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
