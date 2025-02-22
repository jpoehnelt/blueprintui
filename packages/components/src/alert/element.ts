import { html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators/property.js';
import {
  baseStyles,
  i18n,
  I18nService,
  interactionClose,
  InteractionCloseController
} from '@blueprintui/components/internals';
import styles from './element.css' assert { type: 'css' };

const statusIcon = {
  undefined: 'info',
  accent: 'info',
  success: 'success',
  warning: 'warning',
  danger: 'error'
};

/**
 * ```typescript
 * import '@blueprintui/components/include/alert.js';
 * ```
 *
 * ```html
 * <bp-alert status="success">alert</bp-alert>
 * ```
 *
 * @element bp-alert
 * @slot - slot for content
 * @event - close
 * @cssprop --icon-color
 * @cssprop --color
 */
@i18n<BpAlert>({ key: 'actions' })
@interactionClose<BpAlert>()
export class BpAlert extends LitElement {
  static styles = [baseStyles, styles];

  /** determine the visual status state */
  @property({ type: String, reflect: true }) status: 'accent' | 'success' | 'warning' | 'danger';

  /** determine user closable state */
  @property({ type: Boolean }) closable = false;

  /** set default aria/i18n strings */
  @property({ type: Object }) i18n = I18nService.keys.actions;

  private declare interactionCloseController: InteractionCloseController<this>;

  render() {
    return html`
      <div part="internal">
        <slot name="icon"><bp-icon part="icon" .shape=${statusIcon[this.status]} size="sm"></bp-icon></slot>
        <slot></slot>
        ${this.closable
          ? html`<bp-button-icon
              @click=${this.#close}
              part="close"
              shape="close"
              aria-label=${this.i18n.close}></bp-button-icon>`
          : nothing}
      </div>
    `;
  }

  #close() {
    this.interactionCloseController.close();
  }
}
