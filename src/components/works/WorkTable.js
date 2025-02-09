import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("work-table")
export class TableRow extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }
  `;

  render() {
    return html`<div>
      <div class="thead">
        <slot name="thead"></slot>
      </div>

      <div class="tbody">
        <slot name="tbody"></slot>
      </div>
    </div>`;
  }
}
