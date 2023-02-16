import MainPage from '../support/page-models/mainPage'

// Initiating the required PageModels...
const mainPage = new MainPage()

beforeEach(() => {
  cy.viewport(1600, 1000)
  const baseURL = 'https://www.amazon.com/'
  cy.visit(baseURL)
  cy.addItems('Bostitch Personal Electric Pencil Sharpener, Powerful Stall-Free Motor, High Capacity Shavings Tray, Blue (EPS4-BLUE)')
})
afterEach(() => {
  cy.deleteAllCart()
})

describe('Amazon test task 2', () => {

  const urlScissorsIBayamCraftingScrapbooking = 'https://www.amazon.com/Scissors-iBayam-Crafting-Scrapbooking-Knitting/dp/B07H3QKN2Z'

  it('Task 2', () => {
    cy.visit(urlScissorsIBayamCraftingScrapbooking)  // Navaigate to custumer page
    mainPage.buttonYellowGreyBlueOption()
      .click()
    cy.wait(5000)
    mainPage.buttonAddToCart()
      .click()
    mainPage.confirmationMessageLeftSideBar()
      .contains('Added to Cart')
    mainPage.messageNotFreeShipping()
      .should('be.visible')
    mainPage.buttonGoToCart()
      .click()
    mainPage.tabIndexSelectQty()
      .click()
    mainPage.quantity5()
      .click()
    mainPage.readonlyvalueMessageFreeShipping()
      .contains('Part of your order qualifies for FREE Shipping. See each item for details. Details')
  })
})