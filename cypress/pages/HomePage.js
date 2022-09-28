class homeSaucePage {
    
    // Elementos de la clase
    elements = {
      loginButton: () => cy.get('.HPHeaderLogin > a > img'),

      emailField: () => cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail'),
      // elementoNombre: () => ACA_SE_PEGA_EL_ID_DE_CYPRESS_RUNNER,
      // No olvidar la coma al final para que no falle
    
    };
  
    // Metodos de la clase

    userClickOnLogin(){
      this.elements.loginButton().click(); 
    }
  

    userCompletesFieldWithBlabla(){
        this.elements.emailField().type("blabla"); 
      }
    
  }
  
  module.exports = new homeSaucePage();
  