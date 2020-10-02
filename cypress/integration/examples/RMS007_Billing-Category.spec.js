const access = require("../utilies/access");

describe('Validate Billing Categories functionality', function() {

  before (function()  {
    describe('Login functionality', function() {
      access.loginInit();
    });
  }) 

it('Verify the billing categories page is displayed', function() {
        
  cy.get(':nth-child(3) > a').click()
  cy.get('.page-title').should('include.text', 'Categories')
   
  
  // cy.get('.dropdown > .nav-link').click()
  //  cy.get('[href="javascript:void(0)"]').click()
  })

  after (function()  {
    cy.clearCookie
    });  
  })
