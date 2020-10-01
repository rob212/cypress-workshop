/*
    Your 'cypress/integration/journey_test.spec.js' should
    contain the following content at the end of this lesson
*/

/// <reference types="cypress" />

it('goose finder app happy path journey test', () => {
    cy.visit('https://record-a-goose-sighting.herokuapp.com/steps/start');
    cy.findByText('Start now').click();
    
    // Geese Liked Page
    cy.findByLabelText('Yes').check();
    cy.findByText('Continue').click();

    // Geese Type Page
    cy.findByLabelText('Tell us what type of goose it was').type('Pilgrim Goose {enter}');

    // Date Saw Goose Page
    cy.findByLabelText('Day').type('20');
    cy.findByLabelText('Month').type('20');
    cy.findByLabelText('Year').type('20');
    cy.findByText('Continue').click();

    // Check Your Answers Page
    cy.findByText('Continue').click();

     // Final Page
     cy.contains('GOOSE RECORDED');
     cy.get('.govuk-panel__body strong').contains(/[A-Z]{3}[0-9]{4}[A-Z]{1}/);
});