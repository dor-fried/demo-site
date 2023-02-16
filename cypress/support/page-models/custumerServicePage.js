class CustumerServicePage {

    //BUTTONS
    dialogHeading() {
        return cy.get('.hero-banner > .page-container > .fs-heading')
    }
    buttonLinkTodaysDeals() {
        return cy.get('[href="/gp/goldbox?ref_=nav_cs_gb"]')
    }
    buttonLinkCustomerService() {
        return cy.get('[href="/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice"]')
    }
    buttonWheresMyStuff() {
        return cy.get('ul > li')
    }
    buttonTrackYourPackage() {
        return cy.get('.active .fs-match-card')
    }
}

export default CustumerServicePage