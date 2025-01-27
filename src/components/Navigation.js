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
      width: 20px;
      height: 20px;
    }

    a {
      text-decoration: none;
      color: white;

      font-size: 24px;
    }

    svg {
      cursor: pointer;
    }
  `;

  render() {
    return html`<div>
      <ul>
        <li>
          <svg width="20" height="20">
            <rect x="0" y="0" width="20" height="20" fill="white" />
          </svg>
        </li>

        <li><a href="/">About</a></li>
        <li><a href="/">Posts</a></li>
        <li><a href="/">Works</a></li>
      </ul>
    </div>`;
  }
}
