/*
    Your 'cypress/integration/journey_test.spec.js' should
    contain the following content at the end of this lesson
*/

/// <reference types="cypress" />

it('goose finder app happy path journey test', () => {
    cy.visit('https://record-a-goose-sighting.herokuapp.com/steps/start')
    cy.findByRole('button', {name: /Start now/i}).click()

    // Geese Liked page 
    cy.findByRole('radio', {name: /Yes/i}).check()
    cy.findByRole('button', {name: /Continue/i}).click()

    // Geese Type page
    cy.findByLabelText(/Tell us what type of goose/i).type('Pilgrim Goose {enter}')

    // Date Saw Goose page
    cy.findByLabelText(/Day/i).type('20')
    cy.findByLabelText(/Month/i).type('10')
    cy.findByLabelText(/Year/i).type('2020')
    cy.findByRole('button', {name: /Continue/i}).click()

    // Check your answers summary page
    cy.findByRole('button', {name: /Continue/i}).click()

    // Is success message displayed to user
    cy.findByRole('heading', {name: /GOOSE RECORDED/, level: 1}).click()
    cy.findByText('Your reference number')
        .findByText(/[A-Z]{3}[0-9]{4}[A-Z]{1}/)
});
