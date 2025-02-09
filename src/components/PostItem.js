import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("post-item")
export class PostItem extends LitElement {
  static properties = {
    slug: { type: String },
  };

  static styles = css`
    :host {
      display: block;
      padding: 1em;
      margin-top: 1em;

      background-color: var(--theme-primary);
      color: white;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}
