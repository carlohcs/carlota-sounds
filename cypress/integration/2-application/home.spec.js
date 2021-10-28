/// <reference types="cypress" />

// https://nextjs.org/docs/testing
describe('application screen', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // DESKTOP
  it('display application screen after splash', () => {
    
    // Doesn't work
    // cy.waitFor('.cs-home-page', {
    //   timeout: 6000, // The time in ms to poll for changes
    //   //tries: 300,
    // })

    // 5 seconds is the transition time between
    // loading and home page
    cy.wait(6000)
    cy.get('.cs-home-page').within(() => {
      cy.get('.cs-logo').should('be.visible')
      cy.get('.cs-toggle-menu').should('be.visible')
      cy.get('.cs-player').should('be.visible')
      cy.get('.cs-player__actions__mute').should('be.visible')
      cy.get('.cs-experience-menu').should('be.visible')
      cy.get('.cs-footer').should('be.visible')
    })
  })
})
