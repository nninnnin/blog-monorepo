class PostItem extends ListItem {
  constructor() {
    super();
  }

  render() {
    this.shadowRoot.innerHTML = `
      ${this.styles}

      <a href="/${this.getAttribute("slug")}.html">
        <slot>
        </slot>
      </a>
    `;
  }
}

customElements.define("post-item", PostItem);
