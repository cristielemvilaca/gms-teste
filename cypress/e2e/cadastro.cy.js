///<reference types="cypress"/>


describe('Us-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Deve fazer o cadastro de campos obrigatorios', () => {
    var email = `cris${Date.now()}@teste.com`
    cy.preencherCadastro('Cris', 'vilaca', email, '369887452155', 'Teste@2024' )
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  });

  it('Deve validar mensagem de erro com o campo nome invalido',() => {
    cy.preencherCadastro('Cris20', 'vilaca', 'cris@teste.com', '369887452155', 'Teste@2024' )
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos')

  });
});