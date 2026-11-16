
describe('Testes de Checkout - SauceDemo', () => {

  beforeEach(() => {
    // Acessar aplicação
    cy.visit('https://www.saucedemo.com/')

    // Login
    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()

    // Adicionar produto
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click()

    // Acessar carrinho
    cy.get('[data-test="shopping-cart-link"]')
      .click()

    // Iniciar checkout
    cy.get('[data-test="checkout"]')
      .click()
  })

  // CT-07 - Validar preenchimento obrigatório
  it('CT-07 - Deve exigir o preenchimento dos dados do comprador', () => {

    // Tentar continuar sem preencher os campos
    cy.get('[data-test="continue"]')
      .click()

    // Validar mensagem de erro
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'First Name is required')

    // Confirmar que permanece na etapa de identificação
    cy.url()
      .should('include', 'checkout-step-one.html')
  })

  // CT-08 - Jornada completa de compra (E2E)
  it('CT-08 - Deve concluir uma compra com sucesso', () => {

    // Preencher dados do comprador
    cy.get('[data-test="firstName"]')
      .type('Andrea')

    cy.get('[data-test="lastName"]')
      .type('Freire')

    cy.get('[data-test="postalCode"]')
      .type('50000-000')

    // Continuar
    cy.get('[data-test="continue"]')
      .click()

    // Validar página de resumo
    cy.url()
      .should('include', 'checkout-step-two.html')

    // Validar produto
    cy.get('.inventory_item_name')
      .should('have.text', 'Sauce Labs Backpack')

    // Validar preço do produto
    cy.get('.inventory_item_price')
      .should('have.text', '$29.99')

    // Validar subtotal
    cy.get('.summary_subtotal_label')
      .should('contain', '$29.99')

    // Validar imposto
    cy.get('.summary_tax_label')
      .should('contain', '$2.40')

    // Validar valor total
    cy.get('.summary_total_label')
      .should('contain', '$32.39')

    // Finalizar compra
    cy.get('[data-test="finish"]')
      .click()

    // Validar confirmação
    cy.get('.complete-header')
      .should('be.visible')
      .and('have.text', 'Thank you for your order!')

    cy.get('.complete-text')
      .should('be.visible')
      .and('contain', 'Your order has been dispatched')

    // Validar URL de confirmação
    cy.url()
      .should('include', 'checkout-complete.html')

  })

})
