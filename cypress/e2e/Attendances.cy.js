/// <reference types="cypress"/>
describe('template spec', () => {
    beforeEach ('', () =>{
      cy.visit('https://panel.staging-attendance.holywings.id/auth/login')
    })
  
    it('Attendances Page', () => {
  
      // Verifikasi masuk halaman attendances page
      cy.get('#auth-username').type("000599"); 
      cy.wait(2000)
      cy.get('#auth-password').type("000599!");
      cy.wait(2000)
      cy.get('.form-submit').click()
      cy.wait(2000)
      cy.get('.border').click()
      cy.wait(2000)
      cy.get('.leftbar > .flex-col > :nth-child(4) > .relative').click()
      cy.wait(2000)

    })

    it('Leave Request Page', () => {
  
        // Verifikasi masuk halaman attendances page
        cy.get('#auth-username').type("000599"); 
        cy.wait(2000)
        cy.get('#auth-password').type("000599!");
        cy.wait(2000)
        cy.get('.form-submit').click()
        cy.wait(2000)
        cy.get('.border').click()
        cy.wait(2000)
        cy.get('.leftbar > .flex-col > :nth-child(5) > .relative > .flex > .text-sm').click()

    

    

      
 
   })

})