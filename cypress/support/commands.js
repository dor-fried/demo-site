import RegisterPage from '../support/page-models/registerPage'

// Initiating the required PageModels...
const registerPage = new RegisterPage()

Cypress.Commands.add('selectDate', (day) => {
    registerPage.dateAndTime().click()
    cy.wait(1000)
    cy.get(`[data-date=${day}`).click()
    return this
})