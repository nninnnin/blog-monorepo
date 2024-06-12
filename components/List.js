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

        :host ::slotted(list-item) {
          margin-bottom: 6px;
        }
      </style>

      <slot></slot>
    `;
  }
}

window.customElements.define("list-container", List);
