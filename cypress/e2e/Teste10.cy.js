/* eslint-disable no-undef */
describe('Usuario deve se cadastrar e logar no site.', ()=>{
    it('Deve realizar o cadastro e realizar o login em seguida', ()=>{
        cy.visit('/')
        //Realizando o cadastro
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('William Henrique')
        cy.getByData('email-input').type('williamhenrique1@hotmail.com')
        cy.getByData('senha-input').type('william1302')
        cy.getByData('checkbox-input').click()
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')
        cy.location('pathname').should('eq', '/')

        //Realizando o Login
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('williamhenrique1@hotmail.com')
        cy.getByData('senha-input').type('william1302')
        cy.getByData('botao-enviar').click()

        cy.location('pathname').should('eq', '/home')
    })
})