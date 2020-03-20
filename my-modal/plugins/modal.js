// https://www.youtube.com/watch?v=FX2fiUvrYP4

// title: String
// closable: Boolean
// content: String
// width: String ('100px')
// destroy(): void
// Окно должно закрываться
// -----------------------
// setContent(html: String): void PUPLIC
// onClose(): void
// onOpen(): void
// beforeClose(): Boolean
// ----------------------
// AnimationEffect.css


function __createModal(options) {
        const modal = document.createElement('div')
        modal.classList.add('vmodal')
        modal.insertAdjacentHTML('afterbegin', `
            <div class="modal-overlay">
                <div class="modal-window">
                    <div class="modal-header">
                        <span class="modal-title">Modal Title</span>
                        <span onClick="myModal.close()" class="modal-close">&times;</span>
                    </div>
                    <div class="modal-body">
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                    <div class="modal-footer">
                        <button onClick="myModal.close()">OK</button>
                        <button onClick="myModal.close()">Cancel</button>
                    </div>
                </div>
            </div>
        `)
        document.body.appendChild(modal)
        return modal
}

Q.modal = function(options) {
    const ANIMATION_SPEED = 200
    const $modal = __createModal(options )
    let closing = false

    return {
        open() {
            !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED);

        },
        destroy() {}
    }
}
