class ListItem extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
      </style>

      <a href="/posts/${this.getAttribute("slug")}.html">
        <slot>
        </slot>
      </a>
    `;
  }
}

window.customElements.define("list-item", ListItem);
