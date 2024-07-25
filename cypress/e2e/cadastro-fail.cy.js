describe("Pagina de cadastro, caminho triste",()=>{
  beforeEach(()=>{
    cy.visitaSite('register-button')
  })
  it('Percorrer um formulário de forma incorreta, e mostrar mensagens de erro.',()=>{
    cy.get('[data-test="submit-button"]').click()
    cy.contains('É necessário informar um endereço de email').should('be.visible')//esse .should('be.visible') diz que a func anterior tem que ser visível
    cy.contains('Crie uma senha').should('be.visible')
    cy.contains('Repita a senha criada acima').should('be.visible')
  })
})