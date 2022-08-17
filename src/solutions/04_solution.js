/*
    Your 'cypress/integration/journey_test.cy.js' should
    contain the following content at the end of this lesson
*/

/// <reference types="cypress" />

it('goose finder app happy path journey test', () => {
    cy.visit('https://record-a-goose-sighting.herokuapp.com/steps/start');
    cy.get('.govuk-button').click();
});