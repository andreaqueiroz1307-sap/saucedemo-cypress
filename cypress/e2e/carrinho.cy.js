
describe('Testes de Carrinho - SauceDemo', () => {

  beforeEach(() => {
    // Acessa a aplicação
    cy.visit('https://www.saucedemo.com/')

    // Realiza autenticação
    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()

    // Confirma que está na listagem de produtos
    cy.url().should('include', '/inventory.html')
  })

  // CT-04 - Adicionar produto ao carrinho
  it('CT-04 - Deve adicionar produto e atualizar o contador', () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click()

    // Valida o contador do carrinho
    cy.get('[data-test="shopping-cart-badge"]')
      .should('be.visible')
      .and('have.text', '1')

    // Acessa o carrinho
    cy.get('[data-test="shopping-cart-link"]')
      .click()

    // Confirma que o produto foi adicionado
    cy.get('.cart_item')
      .should('have.length', 1)

    cy.get('.inventory_item_name')
      .should('have.text', 'Sauce Labs Backpack')
  })

  // CT-05 - Remover produto do carrinho
  it('CT-05 - Deve remover produto do carrinho', () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click()

    cy.get('[data-test="shopping-cart-link"]')
      .click()

    // Remove o produto
    cy.get('[data-test="remove-sauce-labs-backpack"]')
      .click()

    // Valida que o carrinho ficou vazio
    cy.get('.cart_item')
      .should('not.exist')

    // Valida que o contador desapareceu
    cy.get('[data-test="shopping-cart-badge"]')
      .should('not.exist')
  })

  // CT-06 - Conferir informações do produto
  it('CT-06 - Deve manter as informações corretas do produto no carrinho', () => {

    // Seleciona o produto
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click()

    // Acessa o carrinho
    cy.get('[data-test="shopping-cart-link"]')
      .click()

    // Valida o nome do produto
    cy.get('.inventory_item_name')
      .should('have.text', 'Sauce Labs Backpack')

    // Valida o preço do produto
    cy.get('.inventory_item_price')
      .should('have.text', '$29.99')

    // Valida a quantidade
    cy.get('.cart_quantity')
      .should('have.text', '1')
  })

})
