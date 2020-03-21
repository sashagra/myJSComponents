const priceModal = Q.modal({
    title: "Price Modal",
    closable: true,
    width: '400px',
    content: `
    <p>Price is 50BYN</p>
    `,
    footerButtons: [
        {text: 'Buy', type: 'primary', handler() {
            priceModal.close()
            setTimeout(cartModal.open, 300)
        }},
        {text: 'Cancel', type: 'danger', handler() {
            priceModal.close()
        }}
    ]
})

const deleteModal = Q.modal({
    title: "Delete Modal",
    closable: true,
    width: '200px',
    content: `
    <p>DELETE</p>
    `,
    footerButtons: [
        {text: 'Delete', type: 'primary', handler() {
            deleteModal.close()
        }},
        {text: 'Cancel', type: 'danger', handler() {
            deleteModal.close()
        }}
    ]
})

const cartModal = Q.modal({
    title: "It is Cart Modal",
    closable: true,
    width: '400px',
    content: `
    <p>Some products in Cart</p>
    `,
    footerButtons: [
        {text: 'OK', type: 'primary', handler() {
            cartModal.close()
        }},
        {text: 'Cancel', type: 'danger', handler() {
            cartModal.close()
        }}
    ]
})