import { html, css, LitElement } from 'lit-element';

class NavbarHeader extends LitElement {
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
      <nav class="navbar-fixed-top" id="mainNav">
        <div class="container-navbar">
          <div class="navbar-header">
            <!-- <button
              class="navbar-toggle collapsed"
              data-target="#bs-example-navbar-collapse-1"
              data-toggle="collapse"
              type="button"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button> -->
            <a class="navbar-brand page-scroll" href="#page-top">MAURICIO CORREA</a>
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav">
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

  static get styles() {
    return css`
      :host {
        display: flex;
        width: 100%;
        color: #333;
        min-height: 50px;
      }

      .navbar-fixed-top {
        background-color: white;
        transition: all 0.35s;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1030;
        width: 100%;
      }
      .container-navbar {
        padding-right: 15px;
        padding-left: 15px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .nav {
        list-style: none;
        padding-left: 0;
        display: flex;
        margin: 0;
      }

      .nav > li > a {
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 700;
        color: #222;
        /* line-height: 13px; */
        padding: 10px 15px;
        text-decoration: none;
      }

      /* .nav > li {
      } */

      .navbar-default .navbar-header .navbar-brand {
        text-transform: uppercase;
      }

      .navbar-brand {
        font-weight: 700;
        color: #f05f40;
        text-decoration: none;
        float: left;
        /* height: 50px; */
        padding: 15px 15px;
        font-size: 18px;
        line-height: 20px;
      }
    `;
  }
}

customElements.define('navbar-header', NavbarHeader);
