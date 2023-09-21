/* eslint-disable no-undef */
describe('Login - Teste 3', ()=>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Nao deve permitir o campo senha em branco.', ()=>{
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('william.h.souza@hotmail.com')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo de senha é obrigatório')
    })
})