/// <reference types="cypress"/>
describe('template spec', () => {
  beforeEach ('', () =>{
    cy.visit('https://panel.staging-attendance.holywings.id/auth/login')
  })

  it('Positive Case Login', () => {

    // Verifikasi user login berhasil
    cy.get('#auth-username').type("000599"); 
    cy.wait(2000)
    cy.get('#auth-password').type("000599!");
    cy.wait(2000)
    cy.get('.form-submit').click()

  })

  it('Negative case login', () => {

    // Verifkasi user tidak berhasil login
    cy.get('#auth-username').type("000599");
    cy.wait(2000)
    cy.get('#auth-password').type("00059!");
    cy.wait(2000) 
    cy.get('.form-submit').click()

  })

    it ('Dashboard Page', () => {

      cy.get('#auth-username').type("000599");
      cy.wait(2000)
      cy.get('#auth-password').type("000599!");
      cy.wait(2000)
      cy.get('.form-submit').click()


    

  


      
  })


  




    
  
})
