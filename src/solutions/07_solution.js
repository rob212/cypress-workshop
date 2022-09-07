/*
    Your 'cypress/integration/journey_test.cy.js' should
    contain the following content at the end of this lesson
*/

/// <reference types="cypress" />

it('goose finder app happy path journey test', () => {
    cy.visit('https://record-a-goose-sighting.herokuapp.com/steps/start');
    cy.get('.govuk-button').click();

    // Geese Liked Page
    cy.get('#geese-liked').check();
    cy.get('.govuk-button').click();

    // Geese Type Page
    cy.get('#goose-type').type('Pilgrim Goose {enter}');

    // Date Saw Goose Page
    cy.get('#date-saw-goose-day').type('20');
    cy.get('#date-saw-goose-month').type('10');
    cy.get('#date-saw-goose-year').type('2020');
    cy.get('.govuk-button').click();

    // Check Your Answers Page
    cy.get('.govuk-button').click();
})