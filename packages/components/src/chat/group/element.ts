import { html, LitElement } from 'lit';
import { attachInternals, baseStyles } from '@blueprintui/components/internals';
import styles from './element.css' assert { type: 'css' };

/**
 * ```typescript
 * import '@blueprintui/components/include/chat.js';
 * ```
 *
 * ```html
 * <bp-chat-group>
 *   <bp-chat-message type="sent">How are you?</bp-chat-message>
 *   <bp-chat-message type="received">Great!</bp-chat-message>
 * </bp-chat-group>
 * ```
 *
 * @element bp-chat-group
 * @slot - content
 */
export class BpChatGroup extends LitElement {
  static styles = [baseStyles, styles];

  declare _internals: ElementInternals;

  render() {
    return html`
      <div part="internal">
        <slot></slot>
      </div>
    `;
  }

  connectedCallback(): void {
    super.connectedCallback();
    attachInternals(this);
    this._internals.role = 'log';
    this._internals.ariaLive = 'polite';
    this._internals.ariaRelevant = 'additions';
    this._internals.ariaAtomic = 'false';
  }
}
