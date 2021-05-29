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
})
