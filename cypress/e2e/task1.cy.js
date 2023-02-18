import MainPage from '../support/page-models/mainPage'
import CustumerServicePage from '../support/page-models/custumerServicePage'

// Initiating the required PageModels...
const mainPage = new MainPage()
const custumerServicePage = new CustumerServicePage()

before(() => {
  cy.visit('/')
  cy.url()
    .should('eq', 'https://www.amazon.com/')
})

describe('Amazon test task', () => {
  it('Task 1 - Verify the page custumer service', () => {

    const custumerServiceUrl = '/gp/help/customer/display.html/?nodeId=GENAFPTNLHV7ZACW'

    mainPage.buttonListOfLinks()
      .should('be.visible')
    mainPage.buttonMain()
      .contains('Customer Service')
      .click(({ force: true }))
    custumerServicePage.buttonLinkCustomerService()
      .then((link) => { // Check response status 200 OK
        cy.request(link.prop('href'))
          .its('status')
          .should('eq', 200)
      })
    custumerServicePage.dialogHeading()
      .should('have.text', 'Welcome to Amazon Customer Service') // Check the title 'Welcome' in the page
      .click()
    custumerServicePage.buttonWheresMyStuff()
      .contains(`Where's my stuff`)
      .click()
    custumerServicePage.buttonTrackYourPackage()
      .contains('Track your package')
      .should('be.visible')
    cy.visit(custumerServiceUrl)  // Navaigate to custumer page
    cy.url()
      .should('include', 'nodeId=GENAFPTNLHV7ZACW') // Assert the location of page
    cy.get('h1')
      .should('have.text', ' Track Your Package') // Assert the text title
  })
})