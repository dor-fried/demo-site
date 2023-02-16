import MainPage from '../support/page-models/mainPage'
import CustumerServicePage from '../support/page-models/custumerServicePage'

// Initiating the required PageModels...
const mainPage = new MainPage()
const custumerServicePage = new CustumerServicePage()

before(() => {
  cy.viewport(1600, 1000)
  const baseURL = 'https://www.amazon.com/'
  cy.visit(baseURL)
  cy.url()
    .should('eq', baseURL)
})

describe('Amazon test task', () => {
  it('Task 1 - Verify the page custumer service', () => {

    const custumerServiceUrl = '/gp/help/customer/display.html/?nodeId=GENAFPTNLHV7ZACW'

    mainPage.buttonListOfLinks()
      .should('be.visible')
    mainPage.buttonMain()
      .contains('Customer Service')
      .click(({ force: true }))
    mainPage.buttonWheresMyStuff
    custumerServicePage.dialogHeading()
      .should('have.text', 'Welcome to Amazon Customer Service')
      .click() // Check the title 'welcome' in the page //
    custumerServicePage.buttonWheresMyStuff()
      .contains(`Where's my stuff`)
      .click()
    custumerServicePage.buttonTrackYourPackage()
      .contains('Track your package')
      .should('be.visible')
    cy.visit(custumerServiceUrl)  // Navaigate to custumer page
    cy.url()
      .should('include', custumerServiceUrl) // Assert the location of page
    cy.get('h1')
      .should('have.text', ' Track Your Package') // Assert the text title
  })
})