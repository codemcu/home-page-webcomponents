import { LitElement, css, html } from 'lit-element';

export class CoverHome extends LitElement {
  render() {
    return html`
      <header id="home">
        <div class="header-content">
          <div class="img-home">
            <img alt="Home" class="img-responsive" src="./src/img/img-home.png" />
          </div>
        </div>
        <div class="header-title">
          <h1 class="wow fadeInUp">
            Mauricio Correa
          </h1>
          <p class="wow fadeInUp">
            Front-end developer
          </p>
        </div>
      </header>
    `;
  }

  static get styles() {
    return css`
      :host {
        width: 100%;
        text-align: center;
        color: #f2f2f2;
        background: #a01a55;
        background: linear-gradient(135deg, #a01a55 0%, #a01a55 0%, #bd3c5a 50%, #dd5e5e 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#a01a55", endColorstr="#dd5e5e", GradientType=1 );
        min-height: calc(100vh - 50px);
      }

      #home {
        display: grid;
        grid-template-rows: 60% 40%;
        min-height: calc(100vh - 50px);
      }

      .header-content {
        justify-self: center;
        align-self: end;
      }
      .header-title {
        justify-self: center;
        align-self: start;
      }
    `;
  }
}
customElements.define('cover-home', CoverHome);
