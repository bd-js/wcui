/**
 * {卡片组件}
 * @author yutent<yutent.io@gmail.com>
 * @date 2023/03/06 15:17:25
 */

import { css, html, Component } from '@bd/core'

class Space extends Component {
  static styles = css`
    :host {
      display: block;
    }
    .container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      gap: 12px;
    }
    :host([vertical]) {
      .container {
        flex-direction: column;
      }
    }
    :host([justify]) {
      .container {
        justify-content: space-between;
      }
    }

    $gaps: (
      's': 4px,
      'm': 8px,
      'l': 12px,
      'xl': 16px,
      'xxl': 20px,
      'xxxl': 24px,
      'xxxxl': 28px
    );
    @each $k, $v in $gaps {
      :host([gap='#{$k}']) {
        .container {
          gap: $v;
        }
      }
    }
  `

  render() {
    return html`<div class="container"><slot /></div>`
  }
}

customElements.define('wc-space', Space)
