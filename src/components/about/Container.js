import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("about-container")
class AboutContainer extends LitElement {
  static styles = css`
    :host {
      display: block;

      padding: 1em;
      padding-top: 2em;
    }
  `;

  render() {
    return html`<div>
      <slot></slot>
    </div>`;
  }
}

export default AboutContainer;
