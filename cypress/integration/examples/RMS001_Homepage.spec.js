
    describe('Launch URL', function() {
      
        it('Verify user can view homepage', function() {
      
          cy.visit ('/'); 
          //cy.visit ("http://tvp-ops.surge.sh/");
      
    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/login')

          // Verify landing page text is shown
      cy.get('.mt-3').contains("Welcome to RMS")
      cy.get('.text-center > p').should('be.visible')
      //Verify login elements are present
      cy.get('#email').should('be.visible')
      cy.get('#password').should('be.visible')
      cy.get('.btn').should('be.visible')
   
      //Verify remember me checkbox is displayed
      cy.get('.custom-control-label').should('be.visible')
      //Verify forgot password element is displayed
      cy.get('.text-muted').should('be.visible')
      //Verify footer is shown
      cy.get('.d-block').should('be.visible')
            
          })
          
        })
        
       