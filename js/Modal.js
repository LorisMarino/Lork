/**********
 * Modal
 * v1.0.0
 */

class Modal {
  constructor($modal) {
    this.$ = {} // Initialize object of DOM elements.
    this.$.modal = $modal // Add modal in DOM objects.

    this._initParams()
    this._initialize()
  }

  /**
   * Initialize params
   */
  _initParams() {}

  /**
   * Initialize component.
   */
  _initialize() {
    if (
      document.querySelector(
        `.modal-button[data-modal="${this.$.modal.dataset.modal}"]`
      )
    )
      this.$.button = document.querySelector(
        `.modal-button[data-modal="${this.$.modal.dataset.modal}"]`
      )
    if (this.$.modal.querySelector('.modal__close'))
      this.$.close = this.$.modal.querySelector('.modal__close')

    this._events()
  }

  _events() {
    document.addEventListener('click', event => {
      if (this.$.modal.classList.contains('modal--active')) {
        if (
          !this.$.modal.querySelector('.modal__content').contains(event.target)
        ) {
          this.$.modal.classList.remove('modal--active')
        }
      }
    })

    if (this.$.button) {
      this.$.button.addEventListener('click', event => {
        event.stopPropagation()
        this.$.modal.classList.add('modal--active')
      })
    }

    if (this.$.close) {
      this.$.close.addEventListener('click', () => {
        this.$.modal.classList.remove('modal--active')
      })
    }
  }
}

export default Modal
