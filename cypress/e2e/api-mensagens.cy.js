describe('API adopet',()=>{
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTY0M2NkNi03MTEyLTQxNWItOTVkMi0wNzkwNGIwZDFhMWMiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTcyMTk0NDk1MywiZXhwIjoxNzIyMjA0MTUzfQ.l_YfXwUophTRfVYsyjFkYINb7Na5EJ3GlAbd2w01mqk`
  it('Mensagens da API',()=>{
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c',
      headers: { authorization }
    }).then((res)=>{
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.body).to.have.property('msg')
    })
  })
})