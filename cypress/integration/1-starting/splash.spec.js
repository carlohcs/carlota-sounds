/// <reference types="cypress" />

// https://nextjs.org/docs/testing
describe('splash screen', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // DESKTOP
  it('display loading screen', () => {
    // https://docs.cypress.io/api/commands/within
    cy.get('.cs-app-background').within(() => {
      cy.get('.cs-headphone-icon').should('be.visible')
      cy.get('.cs-loading-screen__title').should('be.visible')
      cy.get('.cs-loading-screen__description').should('be.visible')
      cy.get('.cs-loading-screen__sub-description').should('be.visible')
      cy.get('.cs-dandelion-icon').should('be.visible')
      cy.get('.cs-dandelion-line-icon').should('be.visible')
    })
  })
})
