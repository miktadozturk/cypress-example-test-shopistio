// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import navbar from "../pages/shopist-page/navbar"
//click each links and verify - custom commands
Cypress.Commands.add('navbarLinksValidation', () => {
    navbar.getChairs.should('be.visible').click().then(() => {
        cy.url().should('contain', '/department/chairs') //cy.url yerine cy.location('href') yazilabilir eger eq denirse tam link yazilmali
    })
    navbar.getSofas.should('be.visible').click().then(() => {
        cy.url().should('contain', '/department/sofas')
    })
    navbar.getBedding.should('be.visible').click().then(() => {
        cy.url().should('contain', '/department/bedding')
    })
    navbar.getLighting.should('be.visible').click().then(() => {
        cy.url().should('contain', '/department/lighting')
    })
    navbar.getProfile.should('be.visible').click().then(() => {
        cy.url().should('contain', '/profile')
    })
    navbar.getCart.should('be.visible').click().then(() => {
        cy.url().should('contain', '/cart')
    })
})