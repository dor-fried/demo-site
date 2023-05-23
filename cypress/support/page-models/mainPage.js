require('cypress-xpath');

class MainPage {

    //BUTTONS
    historyButton() {
        return cy.xpath('//div[@class="btn-cymulate empty"]')
    }
    firstRow() {
        return cy.get('[data-tip="https://ekslabs.cymulatedev.com"]')
    }
    urlName() {
        return cy.xpath('//div[@class="report-summary-data"]')
    }
    statusCompleted() {
        return cy.get('[data-tip="Assessment completed successfully"]')
    }
    overallScore() {
        return cy.xpath('//span[@class="pieChartInfoText"]')
    }
    generateReportButton() {
        return cy.xpath('//span[text()="Generate Report"]')
    }
    csvButton() {
        return cy.xpath('//*[text()="CSV"]')
    }
    downloadManager() {
        return cy.get('[test-id="topbar-dropdown-downloads"]')
    }
    downloadButton() {
        return cy.xpath('//*[text()="Download"]')
    }
}

export default MainPage