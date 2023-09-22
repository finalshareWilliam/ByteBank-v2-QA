/* eslint-disable no-undef */
describe('Jornada de usuario', ()=>{
    
    it('Deve permitir que o usuario acesse a aplicacao, realize uma transacao e faca um logout',()=> {
       cy.visit('/')
       cy.getByData('botao-login').click()
       cy.getByData('email-input').type('william.h.souza@hotmail.com')
       cy.getByData('senha-input').type('William1302')
       cy.getByData('botao-enviar').click()

       cy.location('pathname').should('eq', '/home')
// Acao de deposito
       cy.getByData('select-opcoes').select('Depósito')
       cy.getByData('form-input').type('50')
       cy.getByData('realiza-transacao').click()

       cy.getByData('lista-transacoes').find('li').last().contains('R$ 50')
// Acao de transferencia
       cy.getByData('select-opcoes').select('Transferência')
       cy.getByData('form-input').type('60')
       cy.getByData('realiza-transacao').click()

       cy.getByData('lista-transacoes').find('li').last().contains('- R$ 60')

       cy.getByData('botao-sair').click()
       cy.location('pathname').should('eq', '/')
    })
})