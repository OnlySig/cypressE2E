describe('Testar página de login',()=>{
  beforeEach(()=>{
    //esse beforeEach executa esse bloco aqui antes do it, isso facilita pois divide a responsabilidade do escopo.
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="login-button"]').click()
  })
  it('Percorrer o formulário de login, efetuando o login de forma correta.',()=>{
    cy.get('[data-test="input-loginEmail"]').type('ana@email.com')
    cy.get('[data-test="input-loginPassword"]').type('Senha123')
    cy.get('[data-test="submit-button"]').click()
  })
})