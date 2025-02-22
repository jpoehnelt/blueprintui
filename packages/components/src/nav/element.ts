import { html, LitElement, PropertyValues } from 'lit';
import { property } from 'lit/decorators/property.js';
import { keynav } from '@blueprintui/typewriter';
import {
  typeNavigation,
  baseStyles,
  I18nService,
  layerStyles,
  stateExpanded,
  toggleState
} from '@blueprintui/components/internals';
import { BpNavItem } from './item/element.js';
import styles from './element.css' assert { type: 'css' };

/**
 * ```typescript
 * import '@blueprintui/components/include/nav.js';
 * ```
 *
 * ```html
 * <bp-nav></bp-nav>
 * ```
 *
 * @element bp-nav
 * @slot - content
 * @event open
 * @event close
 * @cssprop --background
 * @cssprop --padding
 * @cssprop --width
 * @cssprop --height
 * @cssprop --max-height
 */
@stateExpanded<BpNav>()
@typeNavigation<BpNav>()
@keynav<BpNav>(host => ({ direction: 'block', loop: true, grid: host.items.map(item => [item]) }))
export class BpNav extends LitElement {
  /** determine if element is expanded */
  @property({ type: Boolean, reflect: true }) expanded = false;

  @property({ type: Boolean, reflect: true }) expandable = false;

  /** set default aria/i18n strings */
  @property({ type: Object }) i18n = I18nService.keys.actions;

  static get styles() {
    return [baseStyles, layerStyles, styles];
  }

  get items() {
    return Array.from(this.querySelectorAll<BpNavItem>('bp-nav-item')).filter((i: any) => i.disabled !== true);
  }

  render() {
    return html`
      <div part="internal">
        ${this.expandable
          ? html` <bp-nav-item @click=${this.#change} aria-label=${this.expanded ? this.i18n.close : this.i18n.expand}>
              <bp-icon shape="angle" .direction=${this.expanded ? 'left' : 'right'}></bp-icon>
            </bp-nav-item>`
          : ''}
        <slot layer></slot>
      </div>
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.updateComplete;
    this.#setupScrollPositioning();
  }

  updated(props: PropertyValues<this>) {
    super.updated(props);
    this.items.forEach(i => toggleState(i._internals, '--group-expanded', this.expanded));
  }

  #change() {
    if (this.expanded) {
      this.dispatchEvent(new CustomEvent('close'));
    } else {
      this.dispatchEvent(new CustomEvent('open'));
    }
  }

  async #setupScrollPositioning() {
    const container = this.shadowRoot.querySelector('[part=internal]');
    const key = this.id ? `${this.id}-bp-nav-scroll-position` : 'bp-nav-scroll-position';

    await Promise.all(Array.from(this.items).map(i => i.updateComplete));

    const top = localStorage.getItem(key);
    if (top !== null) {
      setTimeout(() => (container.scrollTop = parseInt(top, 10)), 0);
    }

    this.addEventListener('pointerdown', () => localStorage.setItem(key, `${container.scrollTop}`));
    window.addEventListener('beforeunload', () => localStorage.setItem(key, `${container.scrollTop}`));
  }
}
