describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')//esse comando faz que o cypress vizite esse site
    cy.contains('a', 'Cadastrar').click()//esse comando faz q o cypress clique em uma ancora com o nome Cadastrar
    cy.get('input[name="nome"]').type('Ana de Paula')//o get captura um elemento(input com um atributu name que recebe nome), o type vai escrever oque estiver em na string
    cy.get('input[name="email"]').type('testeDahora@gmail.com')
    cy.get('input[name="password"]').type('Teste123321')
    cy.get('input[name="confirm_password"]').type('Teste123321')
    cy.contains('button', 'Cadastrar').click()
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