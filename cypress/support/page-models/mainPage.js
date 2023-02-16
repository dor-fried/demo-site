class MainPage {

    //BUTTONS
    buttonListOfLinks() {
        return cy.get('#nav-xshop');
    }
    buttonLinkTodaysDeals() {
        return cy.get('[href="/gp/goldbox?ref_=nav_cs_gb"]')
    }
    buttonLinkCustomerService() {
        return cy.get('[href="/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice"]')
    }
    buttonMain() {
        return cy.get('#nav-xshop')
    }
    buttonCustumerService() {
        return cy.get('.hmenu-visible > :nth-child(26) > .hmenu-item')
    }
    buttonWheresMyStuff() {
        return cy.get('ul > li')
    }
    buttonTrackYourPackage() {
        return cy.get('.active > :nth-child(1) > .fs-match-card')
    }
    buttonSubmitSearch() {
        return cy.get('#nav-search-submit-button')
    }
    buttonSelectItem() {
        return cy.get('[alt="Bostitch Personal Electric Pencil Sharpener, Powerful Stall-Free Motor, High Capacity Shavings Tray, Blue (EPS4-BLUE)"]').first()
    }
    buttonAddToCart() {
        return cy.get('#add-to-cart-button');
    }
    buttonYellowGreyBlueOption() {
        return cy.get('[alt="Yellow, Grey, Blue"]')
    }
    buttonGoToCart() {
        return cy.get('#sw-gtc')
    }
    tabIndexSelectQtyRightPanel() {
        return cy.get('#a-autoid-0-announce')
    }
    quantity2() {
        return cy.get('#quantity_1')
    }
    tabIndexSelectQty() {
        return cy.get('#a-autoid-2-announce')
    }
    quantity5() {
        return cy.get('#quantity_5')
    }
    buttonCart() {
        return cy.get('#nav-cart')
    }
    buttonDeleteItem() {
        return cy.get('[value="Delete"]')
    }

    //TEXT INPUTS
    textinputSearch() {
        return cy.get('#twotabsearchtextbox')
    }

    //READ ONLY VALUE
    confirmationMessageRightSideBar() {
        return cy.get('#attachDisplayAddBaseAlert');
    }
    confirmationMessageLeftSideBar() {
        return cy.get('#NATC_SMART_WAGON_CONF_MSG_SUCCESS')
    }
    readonlyvalueMessageFreeShipping() {
        return cy.get('.a-alert-content')
    }
    messageNotFreeShipping() {
        return cy.get('#sw-threshold-message')
    }
    confirmationMessageCartIsEmpty() {
        return cy.get('h1')
    }
}

export default MainPage