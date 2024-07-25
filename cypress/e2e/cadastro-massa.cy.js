import { usuarios } from '../fixtures/usuarios.json'

describe('Página de cadastro', () => {
  beforeEach(()=>{
    cy.visitaSite('register-button')
  })
  usuarios.forEach(user=>{
    it('Deve percorrer o form de cadastro corretamente, para cadastrar um novo usuário.',()=>{
      cy.cadastrarEmMassaUsers(user)
    })
  })
})
