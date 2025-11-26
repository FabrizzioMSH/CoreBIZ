/// <reference types="cypress" />

describe('Prueba E2E - CoreBiz', () => {

    beforeEach(() => {
        cy.visit('https://corebizz.netlify.app/'); 
    });

    it('Debe agregar nombres a la lista', () => {
        cy.get('#amigo').type('Juan');
        cy.contains('button', 'Añadir').click();

        cy.get('#listaAmigos li')
            .should('have.length', 1)
            .and('contain', 'Juan');
    });

    it('Debe sortear un amigo secreto', () => {
        const nombres = ['Pedro', 'Lucía', 'Ana'];
        nombres.forEach(nombre => {
            cy.get('#amigo').type(nombre);
            cy.contains('button', 'Añadir').click();
        });

        cy.contains('button', 'Sortear amigo').click();

        cy.get('#resultado li')
            .should('have.length', 1)
            .and(($item) => {
                const texto = $item.text();
                expect(nombres.some(n => texto.includes(n))).to.be.true;
            });
    });

});
