class ListItem extends Base {
  constructor() {
    super();
  }

  render() {
    this.shadowRoot.innerHTML += `
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
