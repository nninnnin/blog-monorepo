import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("work-item")
export class TableRow extends LitElement {
  static properties = {
    title: { type: String },
    link: { type: String },
    team: { type: String },
    platform: { type: String },
    media: { type: String },
    year: { type: String },
    index: { type: Number },
  };

  static styles = css`
    :host {
      width: 100%;
      display: block;

      margin-top: -1px;

      cursor: default;
    }

    :host:last-child {
      background-color: red;
    }

    a {
      color: inherit;
    }

    tr {
      display: flex;
    }

    td {
      padding: 8px;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    td:first-child {
      flex: 1;
      justify-content: flex-start;
    }

    td + td {
      border-left: 0px;
    }

    td.team {
      overflow: hidden;

      width: 6em;

      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    td.platform {
      overflow: hidden;

      width: 8em;

      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    td.media {
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
    const title = this.link
      ? html` <a href=${this.link}> ${this.title}</a> `
      : html` ${this.title} `;

    return html`<tr>
      <td class="title">${title}</td>

      <td class="platform">${this.platform}</td>
      <td class="media">${this.media}</td>
      <td class="team">${this.team}</td>
      <td class="year">${this.year}</td>
    </tr>`;
  }
}
