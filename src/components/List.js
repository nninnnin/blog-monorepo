import Base from "@/components/Base.js";

class List extends Base {
  constructor() {
    super();
  }

  render() {
    this.shadowRoot.innerHTML += `
      <style>
        :host {
          background-color: var(--theme-primary);
          color: white;

          display: flex;
          align-items: center;

          padding: 1em;
        }
      </style>

      <slot></slot>
    `;
  }
}

window.customElements.define("list-container", List);
