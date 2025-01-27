import Base from "@/components/Base.js";

class ListItem extends Base {
  constructor() {
    super();
  }

  styles = `
    <style>
      :host {
        display: block;

        margin-right: 1em;

        font-size: 2em;
      }

      a {
        text-decoration: none;
        color: inherit;
        font-weight: bold;
      }
    </style>
  `;

  render() {
    this.shadowRoot.innerHTML += `
      ${this.styles}

      <a href="${this.getAttribute("href")}">
        <slot>
        </slot>
      </a>
    `;
  }
}

window.customElements.define("list-item", ListItem);
