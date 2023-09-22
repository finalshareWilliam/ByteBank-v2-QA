/* eslint-disable no-undef */
describe('Testando multiplas paginas', ()=>{
    it('Deve conseguir acessar a pagina de cartoes', ()=>{
        cy.visit('/')
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('william.h.souza@hotmail.com')
        cy.getByData('senha-input').type('William1302')
        cy.getByData('botao-enviar').click()

        cy.location('pathname').should('eq', '/home')

        cy.getByData('app-home').find('a').eq(1).click()
        cy.getByData('titulo-cartoes').should('exist').and('have.text', 'Meus cartões')

        cy.location('pathname').should('eq', '/home/cartoes')
    })
})