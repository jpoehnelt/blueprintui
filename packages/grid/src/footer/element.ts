import { LitElement, html } from 'lit';
import { state } from 'lit/decorators/state.js';
import { baseStyles, layerStyles } from '@blueprintui/components/internals';
import styles from './element.css' assert { type: 'css' };

/**
 * Grid Footer
 *
 * ```typescript
 * import '@blueprintui/grid/include/core.js';
 * ```
 *
 * @element bp-grid-footer
 * @slot - footer content
 * @cssprop --min-height
 * @cssprop --background
 * @cssprop --padding-block
 * @cssprop --padding-inline
 */
export class BpGridFooter extends LitElement {
  static styles = [baseStyles, layerStyles, styles];

  @state() _colSpan = '';

  #internals = this.attachInternals();

  render() {
    return html`<slot layer role="gridcell" part="internal" .ariaColSpan=${this._colSpan}></slot>`;
  }

  connectedCallback() {
    super.connectedCallback();
    this.slot = 'footer';
    this.#internals.role = 'row';
  }
}
