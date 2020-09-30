/*
    Your 'cypress/integration/journey_test.spec.js' should
    contain the following content at the end of this lesson
*/


/* the triple slash directive enables intelisense within VsCode on a per file basis.
 alternatively this can be set project wide via jsconfig.json
*/

/// <reference types="cypress" />

/*
    Cypress includes Mocha as its test runner and Chai as it's assertion library.
    Mocha, Chai and Cypress calls can be made without explicit imports.
*/  

it('<name of your test>', () => {
    cy.visit('<url>');
});
