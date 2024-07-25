describe('Testar página de login, caminho triste.',()=>{
  beforeEach(()=>{
    cy.visitaSite('login-button')
    cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
      statusCode: 400
    }).as('stubPost')
  })
  it('Percorrer o form de login, sem preencher os inputs, clicar no botão de login e mostrar menssagem de erro para o usuário',()=>{
    cy.get('[data-test="submit-button"]').click()
    cy.contains('É necessário informar um endereço de email').should('be.visible')
    cy.contains('Insira sua senha').should('be.visible')
  })
  
  it('Deve falhar mesmo com o form preenchido, pois o user e senha não estão cadastrados.',()=>{
    cy.login('joaquinCortadorDeCana@gmail.com', 'SenhaMaluka1928')
    cy.wait('@stubPost')
    cy.contains('Falha no login. Consulte suas credenciais').should('be.visible')
  })
})