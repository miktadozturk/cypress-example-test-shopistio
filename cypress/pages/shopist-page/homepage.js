class HomePage {

    get getShopNowBtn() {
        return cy.get("div[class='jumbotron jumbotron-large'] a")
    }

    navigate() {
        cy.visit('/')
    }
}

export default new HomePage();