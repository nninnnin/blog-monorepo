class List extends Base {
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

      <slot></slot>
    `;
  }
}

window.customElements.define("list-container", List);
