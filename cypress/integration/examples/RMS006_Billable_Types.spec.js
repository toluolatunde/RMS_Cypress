const access = require("../utilies/access");

describe('Billable Types functionality', function() {
    
  before (function()  {
    describe('Login functionality', function() {
      access.loginInit();
    });
   
  })
      
      //Verify the billables page is displayed
      it('Verify the billable types page is displayed', function() {
      
        cy.get('#side-nav > :nth-child(2) > a').should('be.visible').click()
        cy.get('.page-title').should('be.visible')
        cy.get(':nth-child(2) > .btn').should('be.visible')
        cy.get('#billable-types-datatable_filter > label > .form-control').should('be.visible').type('Hello').clear()
        cy.get(':nth-child(2) > .btn').should('be.visible')
        cy.get('#billable-types-datatable_length > label').should('be.visible')
        cy.get('.sorting_asc').should('be.visible')   
        Cypress.Cookies.preserveOnce('__session')
      })

      it('Verify the user can create billable type', function() {
        
        cy.get(':nth-child(2) > .btn').click()
        cy.get('#createBillableTypeModal > .modal-dialog > .modal-content').should('be.visible')
        cy.get('#createBillableTypeModal > .modal-dialog > .modal-content > .modal-header > #create').should('be.visible')
        cy.get('#typeName').should('be.visible').click().type('FIRS Zaria')
        cy.get('#typeDescription').should('be.visible').type('For Tax revenue in Zaria')
        cy.get('#createBillableTypeModal > .modal-dialog > .modal-content > .modal-body > .modal-footer > .btn-primary').click()
       /cy.get('.alert').should('contain.text', 'successfully')
        Cypress.Cookies.preserveOnce('__session')
        //cy.get('#createBillableTypeModal > .modal-dialog > .modal-content > .modal-header > .close > .fa').click()
      })

      it('Verify the user close create billable type form', function() {
        
        cy.get(':nth-child(2) > .btn').click()
        cy.get('#typeName').should('be.visible').click().type('FIRS Zaria')
        cy.get('#typeDescription').should('be.visible').type('For Tax revenue in Zaria')
        cy.get('#createBillableTypeModal > .modal-dialog > .modal-content > .modal-header > .close > .fa').click()
      })
     
       })

      