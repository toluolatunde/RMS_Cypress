const access = require("../utilies/access");


describe('Dashboard is displayed', function() {
  
  before (function()  {
    describe('Login functionality', function() {
      access.loginInit();
    });
  })

    it('All Cards and Elements are visible', function() {
     
      //Cards Are Visible
      cy.get(':nth-child(3) > :nth-child(1) > .card > .card-body').should('be.visible')
      cy.get(':nth-child(3) > :nth-child(2) > .card > .card-body').should('be.visible')
      cy.get(':nth-child(3) > .card > .card-body').should('be.visible')
      cy.get(':nth-child(3) > :nth-child(4)').should('be.visible')
      cy.get(':nth-child(5) > .card > .card-body').should('be.visible')
      cy.get('.col-md-12 > .card > .card-body').should('be.visible')
      cy.get(':nth-child(5) > :nth-child(1) > .card > .card-body').should('be.visible')
      cy.get(':nth-child(5) > :nth-child(2) > .card > .card-body').should('be.visible')

      //Side menu are displayed
      cy.get('[href="javascript: void(0);"]').should('be.visible').click()
      cy.get(':nth-child(13) > .nav-second-level > :nth-child(1) > a').should('be.visible')
      cy.get(':nth-child(13) > .nav-second-level > :nth-child(2) > a').should('be.visible')
      cy.get('#side-nav > :nth-child(2) > a').should('be.visible')
      cy.get(':nth-child(3) > a').should('be.visible')
      cy.get('[href="javascript:void(0);"]').should('be.visible').click()
      cy.get(':nth-child(4) > .nav-second-level > :nth-child(1) > a').should('be.visible')
      cy.get(':nth-child(4) > .nav-second-level > :nth-child(2) > a').should('be.visible')
      cy.get(':nth-child(5) > .active').should('be.visible')
      cy.get(':nth-child(6) > .active').should('be.visible')
      cy.get(':nth-child(7) > .active').should('be.visible')
      cy.get(':nth-child(8) > .active').should('be.visible')
      cy.get(':nth-child(9) > .active').should('be.visible')
      cy.get(':nth-child(10) > .active').should('be.visible')
      cy.get(':nth-child(11) > a').should('be.visible')
      cy.get(':nth-child(12) > a').should('be.visible')
      cy.get('.dropdown > .nav-link').should('be.visible')
      cy.get('#side-nav > :nth-child(2) > a').should('be.visible')
      //Dropdown for logout
      cy.get('.dropdown > .nav-link').click()
      cy.get('[href="javascript:void(0)"]').click()

      

})
  })
  