class RegisterPage {

    //Selectors
    firstName() {
        return cy.get('#vfb-5')
    }
    lastName() {
        return cy.get('#vfb-7')
    }
    radioButtonGender() {
        return cy.get('input[type="Radio"]')
    }
    genderFemale() {
        return cy.get('[value="Female"]')
    }
    genderOther() {
        return cy.get('[value="Other"]')
    }
    address() {
        return cy.get('#vfb-13-address')
    }
    streetAddress() {
        return cy.get('#vfb-13-address-2')
    }
    city() {
        return cy.get('#vfb-13-zip')
    }
    combobox() {
        return cy.get('[role="combobox"]')
    }
    submitButton() {
        return cy.get('[value="Submit"]')
    }
    email() {
        return cy.get('input[type="email"]')
    }
    dateAndTime() {
        return cy.get('#vfb-18')
    }
    selectHour() {
        return cy.get('[role="combobox"]')
    }
    selectMinuts() {
        return cy.get('[data-select2-id="select2-data-5-4a5r"]')
    }
    mobileNumber() {
        return cy.get('#vfb-19')
    }
    courseInterested() {
        return cy.get('input[type="checkbox"]')
    }
    inputTwoDigits() {
        return cy.get('#vfb-3')
    }
    errorMessage() {
        return cy.get('label.vfb-error')
    }
    listbox() {
        return cy.get('[role="listbox"]')
    }
    options() {
        return cy.get('[role="option"]')
    }
}

export default RegisterPage