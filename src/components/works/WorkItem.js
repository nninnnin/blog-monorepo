import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("work-item")
export class TableRow extends LitElement {
  static properties = {
    title: { type: String },
    titleLink: { type: String },
    team: { type: String },
    type: { type: String },
    year: { type: String },
    index: { type: Number },
  };

  static styles = css`
    :host {
      width: 100%;
      display: block;

      border-top: 1px solid black;
      border-bottom: 1px solid black;
    }

    :host:last-child {
      background-color: red;
    }

    tr {
      display: flex;
    }

    td {
      border-left: 1px solid #000;
      border-right: 1px solid #000;
      padding: 8px;
    }

    td:first-child {
      flex: 1;
    }

    td + td {
      border-left: 0px;
    }

    td.team {
      display: block;
      overflow: hidden;

      width: 5em;

      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    td.type {
      display: block;
      overflow: hidden;

      width: 8em;

      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    td.year {
      width: 2.3em;
      text-align: center;
    }
  `;

  updated(changedProperties) {
    console.log(changedProperties);
  }

  render() {
    return html`<tr>
      <td>
        <a href=${this.titleLink}> ${this.title} </a>
      </td>

      <td class="team">${this.team}</td>
      <td class="type">${this.type}</td>
      <td class="year">${this.year}</td>
    </tr>`;
  }
}
