/* eslint-disable no-undef */
describe('Login - Teste 4', ()=>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Deve realizar o login', ()=>{
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('william.h.souza@hotmail.com')
        cy.getByData('senha-input').type('William1302')
        cy.getByData('botao-enviar').click()
    })
})