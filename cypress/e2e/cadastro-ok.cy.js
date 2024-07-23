describe('Testar página de cadastro.', () => {
  it('Percorrer um formulário de forma que seja cadastrado um usuário.', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')//esse comando faz que o cypress vizite esse site
    cy.get('[data-test="register-button"]').click()//esse comando faz q o cypress clique em uma ancora com o nome Cadastrar
    cy.get('[data-test="input-name"]').type('Ana de Paula')//o get captura um elemento(input com um atributu name que recebe nome), o type vai escrever oque estiver em na string
    cy.get('[data-test="input-email"]').type('testeDahora@gmail.com')
    cy.get('[data-test="input-password"]').type('Teste123321')
    cy.get('[data-test="input-confirm-password"]').type('Teste123321')
    cy.get('[data-test="submit-button"]').click()
  })
})
// describe('exercícios', ()=> {
//   it('Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção', ()=>{
//     cy.visit('https://adopet-frontend-cypress.vercel.app/')
//     cy.contains('a', 'Ver pets disponíveis para adoção').click()
//   })
//   it('testeando as ancoras do header',()=>{
//     cy.visit('https://adopet-frontend-cypress.vercel.app/')
//     cy.get('a[class="header__message"]').click()
//   })
// })