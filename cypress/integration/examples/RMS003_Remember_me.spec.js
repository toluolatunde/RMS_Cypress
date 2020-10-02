        describe('Remember me functionality', function() {


            it('Validate remember me does not work when uncheked', function() {
                cy.visit ('/');
                cy.get('#email').should('be.visible').clear().type('nicholas@initsng.com')
                cy.get('#password').should('be.visible').type('admin_password')
                cy.get('[type="checkbox"]').uncheck().should('not.be.checked')
                cy.get('.btn').should('be.visible').click()
    
               //Dropdown for logout
               cy.get('.dropdown > .nav-link').click()
               cy.get('[href="javascript:void(0)"]').click()

                cy.get('#email').should('be.visible').should('not.contain.value')
                
            }) 
       

      
            it('Verify remember me function works', function() {
                cy.visit('/login')
                cy.get('#email').should('be.visible').type('nicholas@initsng.com')
                cy.get('#password').should('be.visible').type('admin_password')
                //cy.get('[type="checkbox"]')
               cy.get('[type="checkbox"]').check({ force: true }).should('be.checked')
                cy.get('.btn').should('be.visible').click()
              //Dropdown for logout
              cy.get('.dropdown > .nav-link').click()
              cy.get('[href="javascript:void(0)"]').click()
                cy.wait(2000)
              cy.get('#email').should('contain.value')
              cy.clearCookie()
            })
        })

