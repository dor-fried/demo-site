import MainPage from '../support/mainPage'

// Initiating the required PageModels...
const mainPage = new MainPage()

Cypress.Commands.add('addItems', (name) => {
    mainPage.textinputSearch()
        .type(name)
    mainPage.buttonSubmitSearch()
        .click()
    mainPage.buttonSelectItem()
        .click()
    mainPage.tabIndexSelectQtyRightPanel()
        .click()
    mainPage.quantity2()
        .click()
    mainPage.buttonAddToCart().click()
    mainPage.confirmationMessageRightSideBar()
        .should('have.text', 'Added to Cart')
})

Cypress.Commands.add('deleteAllCart', () => {
    mainPage.buttonCart().click()
    mainPage.buttonDeleteItem().then($buttonDeleteItem => {
        if ($buttonDeleteItem.is(':visible')) {
            mainPage.buttonDeleteItem()
                .click({ multiple: true })
            mainPage.confirmationMessageCartIsEmpty()
                .contains('Your Amazon Cart is empty.')
                .should('be.visible')
        }
    })
})