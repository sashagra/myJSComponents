// https://www.youtube.com/watch?v=FX2fiUvrYP4

// title: String ---- DONE
// closable: Boolean --- DONE
// content: String
// width: String ('100px')
// destroy(): void
// Окно должно закрываться --- DONE
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
        let disabled, closeBtn = ""; 
        if (options.closable)  {
            closeBtn = '<span class="modal-close">&times;</span>';
        } else {disabled = 'disabled'}
        modal.insertAdjacentHTML('afterbegin', `
            <div class="modal-overlay">
                <div class="modal-window">
                    <div class="modal-header">
                        <span class="modal-title">${options.title}</span>
                        ${closeBtn}
                    </div>
                    <div class="modal-body">
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                    <div class="modal-footer">
                        <button class="modal-ok" ${disabled}>OK</button>
                        <button class="modal-cancel" ${disabled}>Cancel</button>
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
    $modal.querySelector('.modal-body').textContent = options.content
    let closing = false

    return {
        open() {
            !closing && $modal.classList.add('open');
            document.body.addEventListener('click', this.close);
                

        },
        close(e) {
            
            if (e.target.classList[0]) {    
                const target = e.target.classList[0].split('-')[1]
                if (options.closeClasses.indexOf(target) !== -1) {
            
                    if (options.closable) {
                        closing = true
                        $modal.classList.remove('open')
                        $modal.classList.add('hide')

                        setTimeout(() => {
                            $modal.classList.remove('hide')
                            closing = false;
                        }, ANIMATION_SPEED);
                        document.body.removeEventListener('click', close);
                        }
            }
        }
        },
        destroy() {}
    }
}
