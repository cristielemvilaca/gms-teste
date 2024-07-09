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

  it('Deve validar mensagem de erro de nome não pode ser vazio',() => {
    var email = `cris${Date.now()}@teste.com`
    cy.preencherCadastro( '' , 'vilaca', email , '369887452155', 'Teste@2024' )
    cy.get('#signup-response').should('contain', 'Nome não pode estar vazio')

  });

  it('Deve validar mensagem de erro de sobrenome não pode ser vazio',() => {
    var email = `cris${Date.now()}@teste.com`
    cy.preencherCadastro( 'Cris' , '', email , '369887452155', 'Teste@2024' )
    cy.get('#signup-response').should('contain', 'Sobrenome não pode estar vazio')

  });

  it('Deve validar mensagem de erro de email não pode ser vazio',() => {
    var email = `cris${Date.now()}@teste.com`
    cy.preencherCadastro( 'Cris' , 'Vilaca', '' , '369887452155', 'Teste@2024' )
    cy.get('#signup-response').should('contain', 'E-mail não pode estar vazio')

  });

  it('Deve validar mensagem de erro de senha não pode ser vazio',() => {
    var email = `cris${Date.now()}@teste.com`
    cy.preencherCadastro( 'Cris' , 'Vilaca', email , '369887452155', '' )
    cy.get('#signup-response').should('contain', 'Senha não pode estar vazia')

  });

  it('Deve validar mensagem de erro de senha fraca',() => {
    var email = `cris${Date.now()}@teste.com`
    cy.preencherCadastro( 'Cris' , 'Vilaca', email , '369887452155', 'teste@2024' )
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')

  });

  it.only('Deve validar mensagem de erro email já cadastro',() => {
    cy.preencherCadastro( 'Cris' , 'Vilaca', 'cris1720484759903@teste.com' , '369887452155', 'Teste@2024' )
    cy.get('#signup-response').should('contain', 'Este email já está cadastrado')

  });


});