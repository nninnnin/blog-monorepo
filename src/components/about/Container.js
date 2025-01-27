import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("about-container")
class AboutContainer extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: var(--theme-primary);
    }
  `;

  render() {
    return html`<div></div>`;
  }
}

export default AboutContainer;
