import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

import "@/components/Navigation.js";

@customElement("global-layout")
class GlobalLayout extends LitElement {
  static styles = [
    css`
      :host {
        position: relative;

        margin: 0 auto;
        padding: 0;

        max-width: 1440px;
        background-color: #fff;

        display: flex;
        flex-direction: column;
        min-height: 100dvh;
      }

      .contents {
        margin: 0 auto;
      }
    `,
  ];

  render() {
    return html`
      <my-navigation></my-navigation>

      <div class="contents">
        <slot></slot>
      </div>
    `;
  }
}

export default GlobalLayout;
