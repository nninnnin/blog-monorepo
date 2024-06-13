class ListItem extends Base {
  constructor() {
    super();
  }

  styles = `
    <style>
      :host {
        display: block;
        margin-bottom: 6px;
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
