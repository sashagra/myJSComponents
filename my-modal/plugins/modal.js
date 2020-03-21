// https://www.youtube.com/watch?v=FX2fiUvrYP4



// onClose(): void
// onOpen(): void
// beforeClose(): Boolean
// ----------------------
// AnimationEffect.css

Element.prototype.appendAfter = function(element) {
    element.parentNode.insertBefore(this, element.nextSibling)
}

function noop() {}

function __createModalFooter(buttons = []) {
    
    const wrap = document.createElement('div')

    if (buttons.length > 0) {
        wrap.classList.add('modal-footer')

        buttons.forEach(btn => {
            const $btn = document.createElement('button')
            $btn.textContent = btn.text
            $btn.classList.add('btn')
            $btn.classList.add(`btn-${btn.type || 'secondary'}`)
            $btn.onclick = btn.handler || noop

            wrap.appendChild($btn)
        })
    }

    return wrap
}


function __createModal(options) {
    const DEFAULT_WIDTH = '600px'
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay" data-close>
            <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH};">
                <div class="modal-header">
                    <span class="modal-title">${options.title || 'Window'}</span>
                    ${options.closable ? `<span class="modal-close" data-close>&times;</span>` : ''}
                </div>
                <div class="modal-body" data-content>
                    ${options.content || ''}
                </div>
            </div>
        </div>
    `)
    const footer = __createModalFooter(options.footerButtons)
    footer.appendAfter(modal.querySelector('[data-content]'))
    document.body.appendChild(modal)
    return modal
}

Q.modal = function(options) {
    const ANIMATION_SPEED = 200
    const $modal = __createModal(options)
    let closing = false
    let destroyed = false

    const modal = {
        open() {
            !closing && $modal.classList.add('open');
        },
        close() {
            if (destroyed) {
                return console.log('destroyed')
            }
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')

            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false;
            }, ANIMATION_SPEED);
        }
    }
    const listener = event => {
        if (event.target.dataset.close === '') {
            modal.close()
        }
    }
    $modal.addEventListener('click', listener)

    return Object.assign(modal, {
        destroy() {
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener);
            destroyed = true
        },
        setContent(html) {
            $modal.querySelector('[data-content]').innerHTML = html
        }
    },)
}
