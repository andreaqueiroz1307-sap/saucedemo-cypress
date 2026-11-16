
describe('Testes de Produtos - SauceDemo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()
  })

  // CT-03 - Validar apresentação do catálogo
  it('CT-03 - Deve apresentar corretamente a listagem de produtos', () => {

    // Valida o título da página
    cy.get('.title')
      .should('be.visible')
      .and('have.text', 'Products')

    // Valida a quantidade de produtos
    cy.get('.inventory_item')
      .should('have.length', 6)

    // Valida se todos os produtos possuem nome e preço
    cy.get('.inventory_item').each(($produto) => {

      cy.wrap($produto)
        .find('.inventory_item_name')
        .should('be.visible')
        .and('not.be.empty')

      cy.wrap($produto)
        .find('.inventory_item_price')
        .should('be.visible')
        .and('contain', '$')

    })

  })

})
