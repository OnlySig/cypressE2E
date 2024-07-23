describe('Testar página de login, caminho triste.',()=>{
  beforeEach(()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="login-button"]').click()
  })
  it('Percorrer o form de login, efetuar o login de forma incorreta, e mostrar menssagem de erro para o usuário',()=>{
    cy.get('[data-test="input-loginEmail"]').type('joaquinCortadordeCana@gmail.com')
    cy.get('[data-test="input-loginPassword"]').type('senhaMaluka1928374656')
    cy.get('[data-test="submit-button"]').click()
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
  })
})