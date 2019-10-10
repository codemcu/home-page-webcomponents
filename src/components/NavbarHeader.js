import { html, css, LitElement } from 'lit-element';

class NavbarHeader extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        width: 100%;
        /* padding: 25px; */
        /* text-align: center; */
      }

      .navbar-default {
        border-color: rgba(34, 34, 34, 0.05);
        font-family: 'Titillium Web', sans-serif;
        background-color: #fff;
        transition: all 0.35s;
      }

      .navbar-default {
        background-color: #f8f8f8;
        border-color: #e7e7e7;
      }

      .navbar-fixed-top {
        top: 0;
        border-width: 0 0 1px;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      logo: { type: Function },
    };
  }

  constructor() {
    super();
    this.title = 'Hello open-wc world!';
    this.logo = html``;
  }

  render() {
    return html`
      <nav class="navbar navbar-default navbar-fixed-top" id="mainNav">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
              class="navbar-toggle collapsed"
              data-target="#bs-example-navbar-collapse-1"
              data-toggle="collapse"
              type="button"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand page-scroll" href="#page-top">MAURICIO CORREA</a>
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a class="page-scroll" href="#home">Home</a>
              </li>
              <li>
                <a class="page-scroll" href="#aboutMe">Sobre mí</a>
              </li>
              <li>
                <a class="page-scroll" href="#skills">Habilidades</a>
              </li>
              <li>
                <a class="page-scroll" href="#education">Educación</a>
              </li>
              <li>
                <a class="page-scroll" href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a class="page-scroll" href="#contact">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('navbar-header', NavbarHeader);
