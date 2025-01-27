import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-navigation")
export class NavigationComp extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: var(--theme-primary);

      padding: 18px;
    }

    ul {
      display: flex;
      align-items: center;

      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    li {
      margin-right: 1em;
    }

    li:first-child {
      margin-right: auto;
      width: 24px;
      height: 24px;
    }

    a {
      text-decoration: none;
      color: white;

      font-size: 24px;
    }

    #logo {
      cursor: pointer;
    }
  `;

  render() {
    return html`<div>
      <ul>
        <li>
          <img id="logo" width="24" height="24" src="/browser-eye.png" />
        </li>

        <li><a href="/about">About</a></li>
        <li><a href="/">Posts</a></li>
        <li><a href="/">Works</a></li>
      </ul>
    </div>`;
  }
}
