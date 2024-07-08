///<reference types="cypress"/>


describe('Us-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatorios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Nick')
    cy.get('#signup-lastname').type('Rocha')
    cy.get('#signup-email').type('nickeee@teste.com')
    cy.get('#signup-phone').type('123655478956')
    cy.get('#signup-password').type('Nick@2024')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})