/* eslint-disable no-undef */
describe('Realizar requisicoes para API', ()=>{
    context('GET /users',()=>{
        it('Deve retornar uma lista de usuarios', ()=>{
            cy.request('GET', 'http://localhost:8000/users').then((response)=>{
                expect(response.status).to.eq(200)
                expect(response.body).length.to.be.greaterThan(1)
            })
        })
    })

    context('GET /users/:userId', ()=>{
        it('Deve retornar um unico usuario', ()=>{
            cy.request({
                method:'GET',  
                url : 'http://localhost:8000/users/40a41438-84a6-4b4d-ae1d-7f1713d0a9fe'
            }).then((response)=>{
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('nome')
            })
        })
        it('Deve retornar um erro quando o usuario invalido',()=>{
            cy.request({
                method:'GET',  
                url : 'http://localhost:8000/users/40a41438-84a6',
                failOnStatusCode: false
            }).then(response =>{
                expect(response.status).to.eq(404)
                expect(response.body).to.eq('Not Found')
            })
        })
    })

    context('interceptando solicitacoes de rede', ()=>{
        it('deve fazer a interceptacao do post para o user/login', ()=>{
            cy.intercept('POST', 'users/login').as('loginRequest')
            cy.login('neilton@alura.com', '123456')
            cy.wait('@loginRequest').then((interception) => {
                interception.response = {
                    statusCode: 200,
                    body: {
                        sucess: true,
                        message: 'Login bem sucedido!'
                    }
                }
            })
            cy.visit('/home')
            cy.getByData('titulo-boas-vindas').should('contain.text', 'Bem vindo de volta!')
        })
    })
})