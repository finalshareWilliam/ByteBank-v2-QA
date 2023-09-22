/* eslint-disable no-undef */
describe('Login - Teste 5', ()=>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Deve realizar Cadastro', ()=>{
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('William Icloud')
        cy.getByData('email-input').type('william.h.souza@icloud12.com')
        cy.getByData('senha-input').type('William1302')
        cy.getByData('checkbox-input').click()
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-sucesso').should('exist').and('have.text','Usuário cadastrado com sucesso!')
    })
})