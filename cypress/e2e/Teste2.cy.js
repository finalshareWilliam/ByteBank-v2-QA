/* eslint-disable no-undef */
describe('Página inicial - Teste 2', ()=>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it ('Deve renderizar o data atributo com o texto correto',() => {
        //utilizando comando personalizavel com 2 parametros(data-test e contains)
        cy.getData('titulo-principal','Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
    })
})