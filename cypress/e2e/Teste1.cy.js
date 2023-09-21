/* eslint-disable no-undef */
describe('Página inicial - Teste 1', () => {
  it('Deve renderizar o h1 e h2 com o texto correto', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h1').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
    //ou utilza o comando personalizado, passando 2 parametros (seletor e contains)
    cy.getTexto('h2', 'Vantagens do nosso banco:');
  });
});