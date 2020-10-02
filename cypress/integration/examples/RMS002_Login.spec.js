const access = require("../utilies/access");
access.runLoginFunction();

after (function()  {
    cy.clearCookie
    });  