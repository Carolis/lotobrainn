/// <reference types="cypress" />

describe('Test select options', () => {
  it('Should match select option value, aside color background, result numbers lenght and main title content when clicking on "mega-sena"', () => {
    cy.visit('/')
    cy.get('select').select('mega-sena').should('have.value', 'mega-sena')
    cy.get('ul').find('li').should('have.length', 6)
    cy.get('aside')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(107, 239, 163)') //#6BEFA3
    cy.get('h1').contains('mega-sena')
  })
  it('Should match select option value, aside color background, result numbers lenght and main title content when clicking on "quina"', () => {
    cy.visit('/')
    cy.get('select').select('quina').should('have.value', 'quina')
    cy.get('ul').find('li').should('have.length', 5)
    cy.get('aside')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(134, 102, 239)') //#8666EF
    cy.get('h1').contains('quina')
  })

  it('Should match select option value, aside color background, result numbers lenght and main title content when clicking on "lotofácil"', () => {
    cy.visit('/')
    cy.get('select').select('lotofácil').should('have.value', 'lotofácil')
    cy.get('ul').find('li').should('have.length', 15)
    cy.get('aside')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(221, 122, 198)') //#DD7AC6
    cy.get('h1').contains('lotofácil')
  })
  it('Should match select option value, aside color background, result numbers lenght and main title content when clicking on "lotomania"', () => {
    cy.visit('/')
    cy.get('select').select('lotomania').should('have.value', 'lotomania')
    cy.get('ul').find('li').should('have.length', 20)
    cy.get('aside')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(255, 171, 100)') //#FFAB64
    cy.get('h1').contains('lotomania')
  })

  it('Should match select option value, aside color background, result numbers lenght and main title content when clicking on "timemania"', () => {
    cy.visit('/')
    cy.get('select').select('timemania').should('have.value', 'timemania')
    cy.get('ul').find('li').should('have.length', 7)
    cy.get('aside')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(90, 173, 125)') //#5AAD7D
    cy.get('h1').contains('timemania')
  })
  it('Should match select option value, aside color background, result numbers lenght and main title content when clicking on "dia de sorte"', () => {
    cy.visit('/')
    cy.get('select').select('dia de sorte').should('have.value', 'dia de sorte')
    cy.get('ul').find('li').should('have.length', 7)
    cy.get('aside')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(191, 175, 131)') //#BFAF83
    cy.get('h1').contains('dia de sorte')
  })
})
