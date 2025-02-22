import { html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { baseStyles, interactionStyles, BaseButton, stateSelected } from '@blueprintui/components/internals';
import styles from './element.css' assert { type: 'css' };

/**
 * Nav Item
 *
 * @element bp-nav-item
 * @slot - content
 * @cssprop --background
 * @cssprop --color
 * @cssprop --padding
 * @cssprop --font-size
 * @cssprop --border
 * @cssprop --border-left
 */
@stateSelected<BpNavItem>()
export class BpNavItem extends BaseButton {
  @property({ type: Boolean, reflect: true }) selected = false;

  static styles = [baseStyles, interactionStyles, styles];

  get #icons() {
    return this.querySelectorAll('bp-icon');
  }

  render() {
    return html`<div interaction layer part="internal">
      <slot name="icon"></slot><slot default @slotchange=${this.#updateSlots}></slot>
    </div>`;
  }

  #updateSlots() {
    this.#icons.forEach(i => (i.slot = 'icon'));
  }
}
