/* eslint-disable no-undef */
describe('Login - Teste 1', ()=>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Nao deve permitir um email invalido', ()=>{
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('william.h.souza@hotmail')
        cy.getByData('senha-input').type('William1302')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido')
    })
})