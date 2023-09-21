/* eslint-disable no-undef */

Cypress.Commands.add('getData', (seletor, texto) => {
    return cy.get(`[data-test=${seletor}]`).contains(`${texto}`);
  });
  Cypress.Commands.add('getByData', (seletor, texto) => {
    return cy.get(`[data-test=${seletor}]`);
  });
  
Cypress.Commands.add('getTexto', (seletor, texto) => {
    return cy.get(`${seletor}`).contains(`${texto}`);
  })