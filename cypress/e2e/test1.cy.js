import RegisterPage from '../support/page-models/registerPage'

// Initiating the required PageModels...
const registerPage = new RegisterPage

before(() => {
  cy.fixture('testData.json').then(function (data) {
    this.data = data
  })
})

beforeEach(() => {
  cy.visit('/demo-site')
})

describe('Suite_1', function () {
  it('Users should be able to submit the form, provided valid data', function () {
    cy.log('Starting the test')

    registerPage.firstName().type(this.data.firstName)
    registerPage.lastName().type(this.data.lastName)
    registerPage.radioButtonGender().first().check()
    registerPage.address().type(this.data.address)
    registerPage.streetAddress().type(this.data.streetAddress)
    registerPage.city().type(this.data.city)
    registerPage.combobox()
      .first()
      .click()
    registerPage.listbox()
    registerPage.options()
      .contains('Israel')
      .click()
    registerPage.email().type(this.data.email)
    cy.selectDate('"30"')
    registerPage.selectHour().eq(1)
      .click()
    registerPage.listbox()
    registerPage.options()
      .contains('11')
      .click()
    registerPage.selectHour().eq(2)
      .click()
    registerPage.listbox()
    registerPage.options()
      .contains('15')
      .click()
    registerPage.mobileNumber().type(this.data.mobileNumber)
    const checkboxCourseName = [
      "Selenium WebDriver",
      "UFT",
      "TestNG",
      "Core Java",
      "Functional Testing",
      "Others"
    ];
    registerPage.courseInterested().should('have.length', 6)
    registerPage.courseInterested().each((item, index) => {
      cy.wrap(item).should('contain.value', checkboxCourseName[index])
    })
    //Select TestNG course
    registerPage.courseInterested().eq(2).click()

    //Try to submit form without input Two Digits
    registerPage.submitButton().click()
    registerPage.errorMessage().should('be.visible')

    registerPage.inputTwoDigits().type('11')
    registerPage.submitButton().click()

    //Assert the form is verificate
    cy.url().should('include', '/dynamictransaction')
    cy.get('h2').should('have.text', 'Dynamic Transaction Verification')
  })

  it('Negative tests', function () {
    cy.log('Starting the test')

    //There should be error labels when the email is invalid
    registerPage.email().type(this.data.invalidEmail)
    registerPage.submitButton().click()
    registerPage.errorMessage().should('have.text', 'Please enter a valid email address.')
    registerPage.email().clear()

    //There should be error labels for each unfilled mandatory field when trying to submit the form
    registerPage.submitButton().click()
    registerPage.errorMessage()
      .should('have.length', 5)
    registerPage.errorMessage().should(($lable) => {
    //Assert the error message
      expect($lable.get(0).innerText).to.eq('This field is required.')
    })
  })
})