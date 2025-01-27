import Base from "@/components/Base.js";

class GlobalLayout extends Base {
  constructor() {
    super();
  }

  render() {
    this.shadowRoot.innerHTML += `
      <style>
        :host {
          margin: 0;
          padding: 0;
        }
      </style>

      <slot></slot>
    `;
  }
}

export default GlobalLayout;
