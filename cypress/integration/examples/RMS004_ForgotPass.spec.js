
describe('Forgot Password functionality', function() {
 
      it('Validate forgot password works', function() {
        
        cy.visit ('/');
        cy.get('.text-muted').should('be.visible').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/password/reset')

    cy.get('.mt-3').should('be.visible')
    cy.get('.text-center > p').should('be.visible')
    cy.get('#email').should('be.visible').type('tolu@initsng.com')

    cy.get('.text-muted').should('be.visible')
    cy.get('.btn').click()

    //Wait for alert
    

      })

    })