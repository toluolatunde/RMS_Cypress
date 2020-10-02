export const invalidLogin1 = () => { describe('Login functionality', function() {

    it('User can not login with invalid credentials', function() {
        cy.visit ('/');
      
        cy.get('#email').should('be.visible').type('nicholas@initsng.com')
        cy.get('#password').should('be.visible').type('operator@inits.xyz')
        cy.get('.btn').should('be.visible').click()
        cy.get('.alert').contains('These credentials do not match our records')

    })
})

}

    export const invalidLogin2 = () => { describe('Login functionality', function() {

    it('User can not login with empty field', function() {
        cy.visit ('/')
        cy.get('#email').should('be.visible').type('nicholas@initsng.com')
        cy.get('#password').should('be.visible')
        cy.get('.btn').should('be.visible').click()
    })
    }) 
}

export const runLoginFunction = () => {
 invalidLogin1();
        invalidLogin2();
        validLogin();
}

export const loginInit = () => {
    cy.visit('/')
     
    cy.get('#email').should('be.visible').type('nicholas@initsng.com')
    cy.get('#password').should('be.visible').type('admin_password')
    cy.get('.btn').should('be.visible').click()
    cy.get('.button-menu-mobile > .mdi').should('be.visible')
    Cypress.Cookies.preserveOnce('__session')
}


    export const validLogin = () => { 
        describe('Login functionality', function() {

          it('User can login with valid credentials', function() {
            loginInit()
                //Dropdown for logout
                cy.get('.dropdown > .nav-link').click()
                cy.get('[href="javascript:void(0)"]').click()
       
        })
    })
}

