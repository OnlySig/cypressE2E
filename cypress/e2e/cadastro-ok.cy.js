describe('Testar página de cadastro.', () => {
  beforeEach(()=>{
    cy.visitaSite('register-button')//essa func está na pasta support no arquivo commands.js (como todas as funcs customizadas!)
  })
  it('Percorrer um formulário de forma que seja cadastrado um usuário.', () => {
    cy.cadastro('Ana de Paula', 'testDahora@email.com', 'TestDahora123', 'TestDahora123')//essa func cadastro esta na pasta support em commands.js
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