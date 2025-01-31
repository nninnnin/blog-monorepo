import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

import "@/components/Navigation.js";

@customElement("global-layout")
class GlobalLayout extends LitElement {
  static styles = css`
    :host {
      margin: 0;
      padding: 0;

      display: flex;
      flex-direction: column;
      min-height: 100dvh;

      position: relative;
    }

    :host div {
      width: 600px;
      margin: 0 auto;
    }
  `;

  render() {
    return html`
      <my-navigation></my-navigation>
      <div>
        <slot></slot>
      </div>
    `;
  }
}

export default GlobalLayout;
