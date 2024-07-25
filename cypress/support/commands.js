Cypress.Commands.add('visitaSite', (command)=>{
  cy.visit('https://adopet-frontend-cypress.vercel.app')//esse comando faz que o cypress vizite esse site
  cy.get(`[data-test=${command}]`).click()//esse comando faz q o cypress clique em uma ancora com o nome Cadastrar
})
Cypress.Commands.add('login', (email, password) => {
  cy.get('[data-test="input-loginEmail"]').type(email)//ana@email.com
  cy.get('[data-test="input-loginPassword"]').type(password)//Senha123
  cy.get('[data-test="submit-button"]').click()
})
Cypress.Commands.add('cadastro', (name, email, password, confirmPass)=>{
  cy.get('[data-test="input-name"]').type(name)//o get captura um elemento(input com um atributu name que recebe nome), o type vai escrever oque estiver em na string
  cy.get('[data-test="input-email"]').type(email)
  cy.get('[data-test="input-password"]').type(password)
  cy.get('[data-test="input-confirm-password"]').type(confirmPass)
  cy.get('[data-test="submit-button"]').click()
})
Cypress.Commands.add('cadastrarEmMassaUsers', (user)=>{
  cy.get('[data-test="input-name"]').clear().type(user.name)
  cy.get('[data-test="input-email"]').clear().type(user.email)
  cy.get('[data-test="input-password"]').clear().type(user.password)
  cy.get('[data-test="input-confirm-password"]').clear().type(user.password)
  cy.get('[data-test="submit-button"]').click()
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })