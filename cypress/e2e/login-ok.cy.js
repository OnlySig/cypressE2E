describe('Testar página de login',()=>{
  beforeEach(()=>{
    //esse beforeEach executa esse bloco aqui antes do it, isso facilita pois divide a responsabilidade do escopo.
    cy.visitaSite('login-button')
  })
  it('Percorrer o formulário de login, efetuando o login de forma correta.',()=>{
    cy.login('ana@email.com', "Senha123") //essa função login resume uns 3 get, que estão em commands.js na pasta support
  })
})