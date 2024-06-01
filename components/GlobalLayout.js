class GlobalLayout extends Base {
  constructor() {
    super();
  }

  render() {
    this.shadowRoot.innerHTML += `
      <style>
      </style>

      <slot></slot>
    `;
  }
}
