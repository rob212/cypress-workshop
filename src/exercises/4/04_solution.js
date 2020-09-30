/*
    Your 'cypress/integration/journey_test.spec.js' should
    contain the following content at the end of this lesson
*/

/// <reference types="cypress" />

it('should naviate to goose finder app', () => {
    cy.visit('https://record-a-goose-sighting.herokuapp.com/steps/start');
    cy.get('.govuk-button').click();
})