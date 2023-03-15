/**
 * {卡片组件}
 * @author yutent<yutent.io@gmail.com>
 * @date 2023/03/06 15:17:25
 */

import { css, html, Component } from '@bd/core'

class Card extends Component {
  static props = {
    header: ''
  }

  static styles = css`
    :host {
      display: flex;
      border-radius: 3px;
    }

    .card-box {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 100%;
      border: 1px solid var(--color-plain-2);
      border-radius: inherit;
      background: #fff;
      color: var(--color-dark-1);
      transition: box-shadow 0.2s ease-in-out;
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        min-height: 52px;
        padding: var(--card-padding, 8px 16px);
        border-bottom: 1px solid var(--color-plain-2);
        font-size: 16px;
        user-select: none;
      }
      .content {
        flex: 1;
        min-height: 64px;
        padding: var(--card-padding, 8px 16px);
        font-size: 14px;
        color: var(--color-dark-1);
      }
    }

    :host([shadow='never']) .card-box,
    :host([shadow='hover']) .card-box {
      box-shadow: none;
    }
    :host([shadow='hover']:hover) .card-box {
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
    }
  `

  render() {
    return html`
      <div class="card-box">
        <div class="header">${this.header || html`<slot name="header" />`}</div>
        <div class="content"><slot /></div>
      </div>
    `
  }
}

customElements.define('wc-card', Card)
