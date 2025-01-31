import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-navigation")
export class NavigationComp extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: var(--theme-primary);

      --padding-value: 18px;
      padding: var(--padding-value);

      position: sticky;
      top: 0;
      left: 0;
      width: calc(100% - var(--padding-value) * 2);
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
          <a href="/" style="display :flex; align-items: center">
            <img id="logo" width="24" height="24" src="/browser-eye.png" />
            <span
              style="margin-left: 7.5px; margin-bottom: -2px; white-space: nowrap; font-size: 20px; font-weight: bold"
              >Justin Donggyu Lee</span
            >
          </a>
        </li>

        <li><a href="/about">About</a></li>
        <li><a href="/works">Works</a></li>
      </ul>
    </div>`;
  }
}
