/// <reference types="cypress" />

describe('Get Lotteries query', () => {
  it('Should fetch lotteries data', () => {
    const getLotteriesString = `{
          loterias {
              id
              nome
          }
      }`
    cy.request({
      method: 'POST',
      url: 'https://brainn-api-loterias.herokuapp.com/graphql',
      body: {
        query: getLotteriesString
      }
    }).then((res) => {
      cy.log(res.body)
    })
  })

  it('Should fetch lotteries and bets data', () => {
    const getLotteriesBetsString = `{
      loteriasConcursos {
        loteriaId
        concursoId
      }
    }`
    cy.request({
      method: 'POST',
      url: 'https://brainn-api-loterias.herokuapp.com/graphql',
      body: {
        query: getLotteriesBetsString
      }
    }).then((res) => {
      cy.log(res.body)
    })
  })

  it('Should fetch bets info data', () => {
    const getBetsString = `{
      concurso(id: 0) {
        id
        loteria
        numeros
        data
      }
    }`
    cy.request({
      method: 'POST',
      url: 'https://brainn-api-loterias.herokuapp.com/graphql',
      body: {
        query: getBetsString
      }
    }).then((res) => {
      cy.log(res.body)
    })
  })
})
