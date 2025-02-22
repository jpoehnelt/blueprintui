import { html, LitElement, PropertyValueMap } from 'lit';
import { typeNavigation, baseStyles, createId } from '@blueprintui/components/internals';
import styles from './element.css' assert { type: 'css' };

/**
 * Breadcrumb
 *
 * ```typescript
 * import '@blueprintui/components/include/breadcrumb.js';
 * ```
 *
 * ```html
 * <bp-breadcrumb aria-label="breadcrumb">
 *   <a bp-text="link" href="/home">Home</a>
 *   <a bp-text="link" href="/parent">Parent page</a>
 *   <p bp-text="content" aria-current="page">Current page</p>
 * </bp-breadcrumb>
 * ```
 *
 * @element bp-breadcrumb
 * @slot - breadcrumb items
 * @slot separator - separator
 * @part separator
 * @cssprop --font-size
 * @cssprop --font-weight
 * @cssprop --color
 * @cssprop --gap
 */
@typeNavigation<BpBreadcrumb>()
export class BpBreadcrumb extends LitElement {
  get #items() {
    return Array.from(this.children).filter(c => c.slot !== 'separator');
  }

  get #separator() {
    return this.querySelector('[slot="separator"]')?.cloneNode(true) ?? html`/`;
  }

  static get styles() {
    return [baseStyles, styles];
  }

  render() {
    return html`
      <ol part="internal">
        ${this.#items.map(
          (item, i) => html`<li>
            <slot name=${item.slot}></slot>
            ${i < this.#items.length - 1
              ? html`<span part="separator" aria-hidden="true">${this.#separator}</span>`
              : ''}
          </li>`
        )}
      </ol>
      <slot></slot>
      <slot hidden name="separator"></slot>
    `;
  }

  protected firstUpdated(props: PropertyValueMap<this>) {
    super.firstUpdated(props);
    this.shadowRoot.addEventListener('slotchange', e => {
      const slot = e.target as HTMLSlotElement;
      if (slot.name.length && !slot.assignedElements().length) {
        this.#items.forEach(item => (item.slot = ''));
      } else if (slot.name === '' && slot.assignedElements().length) {
        this.#items.forEach(item => (item.slot = createId()));
        this.requestUpdate();
      }
    });
  }
}
