import { LitElement, html, css } from 'lit-element';

import './NavbarHeader';

class HomeLit extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  render() {
    return html`
      <navbar-header></navbar-header>
    `;
  }

  static get styles() {
    return [
      css`
        :host {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          margin: 0 auto;
        }
      `,
    ];
  }
}

customElements.define('home-lit', HomeLit);
