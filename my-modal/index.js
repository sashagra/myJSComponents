const myModal = Q.modal({
    title: "My Modal Super Puper",
    closable: true,
    elName: 'myModal',
    closeClasses: ['close', 'overlay', 'ok', 'cancel'], // {modal-var}
    content: 'I want to tell you about... some words'
})

// myModal.open();