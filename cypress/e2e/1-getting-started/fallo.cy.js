describe('Casos negativos', ()=>{
    beforeEach(()=>{
        cy.visit('https://ticketazo.com.ar/auth/registerUser');
        cy.reload();
    }

    )
    it('Campos vacios', ()=> {
         
        cy.get('[data-cy="btn-registrarse"]').click();    
        cy.get('.grid > :nth-child(2) > .hidden').should('be.visible');            
    })

       it('Email no coincide', ()=> {
        
        cy.get('[data-cy="input-nombres"]').type('Tomas');
        cy.get('[data-cy="input-apellido"]').type('Zorrilla');
        cy.get('[data-cy="input-telefono"]').type('3521415648');
        cy.get('[data-cy="input-dni"]').type('54998765');
        cy.get('[data-cy="select-provincia"]').click();
        cy.get('[data-cy="select-provincia"]').type('Córdoba{enter}'); 
        cy.get('[data-cy="select-localidad"]').click();
        cy.get('[data-cy="select-localidad"]').type('Deán Funes{enter}');
        cy.get('[data-cy="input-email"]').type('123tomaszorrilla@gmail.com');
        cy.get('[data-cy="input-confirmar-email"]').type('tomaszorrilla@gmail.com');
        cy.get('[data-cy="input-password"]').type('Prueba.1234');
        cy.get('[data-cy="input-repetir-password"]').type('Prueba.1234');
        cy.get('[data-cy="input-fecha-nacimiento"]').click();
        cy.contains('dd').type('04');
        cy.contains('mm').type('01');
        cy.contains('aaaa').type('2000');
        cy.get('[data-cy="btn-registrarse"]').click();
        cy.get('[data-cy="error-message"]').should('be.visible').and('contain.text','Los correos electrónicos no coinciden');
        
    })

     it('Contraseña no coincide', ()=> {
        cy.get('[data-cy="input-nombres"]').type('Tomas');
        cy.get('[data-cy="input-apellido"]').type('Zorrilla');
        cy.get('[data-cy="input-telefono"]').type('3521415648');
        cy.get('[data-cy="input-dni"]').type('54998765');
        cy.get('[data-cy="select-provincia"]').click();
        cy.get('[data-cy="select-provincia"]').type('Córdoba{enter}'); 
        cy.get('[data-cy="select-localidad"]').click();
        cy.get('[data-cy="select-localidad"]').type('Deán Funes{enter}')
        cy.get('[data-cy="input-email"]').type('tomaszorrilla@gmail.com');
        cy.get('[data-cy="input-confirmar-email"]').type('tomaszorrilla@gmail.com');
        cy.get('[data-cy="input-password"]').type('Prueba.1234');
        cy.get('[data-cy="input-repetir-password"]').type('Prueba.134');
        cy.get('[data-cy="input-fecha-nacimiento"]').click();
        cy.contains('dd').type('04');
        cy.contains('mm').type('01');
        cy.contains('aaaa').type('2000');
        cy.get('[data-cy="btn-registrarse"]').click();
        cy.get('[data-cy="error-message"]').should('be.visible').and('contain.text','Las contraseñas no coinciden');
        
    })

    it('Formato de telefono no coincide', ()=> {
        cy.get('[data-cy="input-nombres"]').type('Tomas');
        cy.get('[data-cy="input-apellido"]').type('Zorrilla');
        cy.get('[data-cy="input-telefono"]').type('35');
        cy.get('[data-cy="input-dni"]').type('54998765');
        /*cy.get('[data-cy="select-provincia"]').click();
        cy.get('[data-cy="select-provincia"]').type('Córdoba{enter}'); 
        cy.get('[data-cy="select-localidad"]').click();
        cy.get('[data-cy="select-localidad"]').type('Deán Funes{enter}')
        cy.get('[data-cy="input-email"]').type('tomaszorrilla@gmail.com');
        cy.get('[data-cy="input-confirmar-email"]').type('tomaszorrilla@gmail.com');
        cy.get('[data-cy="input-password"]').type('Prueba.1234');
        cy.get('[data-cy="input-repetir-password"]').type('Prueba.134');
        cy.get('[data-cy="input-fecha-nacimiento"]').click();
        cy.contains('dd').type('04');
        cy.contains('mm').type('01');
        cy.get('[data-cy="btn-registrarse"]').click();*/
        cy.get('[data-invalid="true"] > .hidden').should('be.visible').and('contain.text','Utiliza un formato que coincida con el solicitado');
        
    })
})