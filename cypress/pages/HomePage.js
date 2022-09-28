class homeSaucePage {
    
    // Elementos de la clase
    elements = {
      loginButton: () => cy.get('.HPHeaderLogin > a > img'),

      emailField: () => cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail'),

      loginButonMenu: () => cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin'),

      validationText: ()=> cy.get('#ErrorMessageText')
      // elementoNombre: () => ACA_SE_PEGA_EL_ID_DE_CYPRESS_RUNNER,
      // No olvidar la coma al final para que no falle
    
    };
  
    // Metodos de la clase

    userClickOnLogin(){
      this.elements.loginButton().click(); 
    }
  

    userClickOnLoginMenu(){
        this.elements.loginButonMenu().click(); 
      }    
    userCompletesFieldWithBlabla(){
        this.elements.emailField().type("blabla"); 
      }
    
    
    elementShuldHaveText(){
        this.elements.validationText().should("have.text","Wrong email or password. Please try again. Forgot your password? You can retrieve it using the form below.")

    }





  }
  
  module.exports = new homeSaucePage();
  