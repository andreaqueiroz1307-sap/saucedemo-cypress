
describe('Testes de Autenticação - SauceDemo', () => {

  // Preparação executada antes de cada teste
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  // CT-01 - Login com credenciais válidas
  it('CT-01 - Deve permitir login com credenciais válidas', () => {

    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()

    // Valida se o usuário foi direcionado para os produtos
    cy.url().should('include', '/inventory.html')

    // Valida se a listagem de produtos está visível
    cy.get('[data-test="inventory-list"]')
      .should('be.visible')

    // Valida se os seis produtos foram apresentados
    cy.get('.inventory_item')
      .should('have.length', 6)
  })

  // CT-02 - Login com credenciais inválidas
  it('CT-02 - Deve apresentar erro com credenciais inválidas', () => {

    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('senha_incorreta')

    cy.get('[data-test="login-button"]')
      .click()

    // Valida se a mensagem de erro foi apresentada
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match')
  })

})
