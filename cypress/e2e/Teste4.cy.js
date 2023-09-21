/* eslint-disable no-undef */
describe('Login - Teste 2', ()=>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Nao deve permitir o campo email em branco.', ()=>{
        cy.getByData('botao-login').click()
        cy.getByData('senha-input').type('William1302')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório')
    })
})