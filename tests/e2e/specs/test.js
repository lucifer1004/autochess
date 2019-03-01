// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits Home (/)', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to AutoChess')
  })

  it('Visits Game (/game)', () => {
    cy.visit('/game')
    cy.contains('h1', 'Play the game!')
  })

  it('Visits About (/about)', () => {
    cy.visit('/about')
    cy.contains('h1', 'About this site')
  })
})
