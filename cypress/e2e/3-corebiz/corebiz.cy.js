/// <reference types="cypress" />

describe('Prueba E2E - CoreBiz Sorteos', () => {

    beforeEach(() => {
        cy.visit('https://corebizz.netlify.app/'); 
    });

    it('Debe agregar nombres a la lista y tomar evidencia', () => {
        cy.get('#amigo').type('Juan');
        cy.contains('button', 'Añadir').click();

        cy.get('#listaAmigos li')
            .should('have.length', 1)
            .and('contain', 'Juan');
        
        // --- EVIDENCIA 1 ---
        // Tomamos foto de que Juan se agregó correctamente
        cy.screenshot('1-validacion-agregar-usuario');
    });

    it('Debe sortear un amigo secreto y mostrar el ganador', () => {
        const nombres = ['Pedro', 'Lucía', 'Ana'];
        
        // Agregamos los 3 nombres
        nombres.forEach(nombre => {
            cy.get('#amigo').type(nombre);
            cy.contains('button', 'Añadir').click();
        });

        // --- EVIDENCIA 2 ---
        // Foto de la lista llena antes de sortear
        cy.screenshot('2-lista-completa-antes-sorteo');

        cy.contains('button', 'Sortear amigo').click();

        // Validamos el resultado
        cy.get('#resultado li')
            .should('have.length', 1)
            .and(($item) => {
                const texto = $item.text();
                expect(nombres.some(n => texto.includes(n))).to.be.true;
            });

        // --- EVIDENCIA 3 ---
        // ¡La foto más importante! El resultado del sorteo
        cy.screenshot('3-resultado-ganador-sorteo');
    });

});