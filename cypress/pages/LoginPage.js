class homeSaucePage {
  elements = {
    loginButtonHome: () => cy.get('.HPHeaderLogin > a > img'),
    loginButtonModal: () => cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin'),
    emailTextbox: () => cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail'),
    passwordTextbox: () => cy.get('#ctl00_MainContent_LoginControl1_TextBoxPassword'),
    projectsText: () => cy.get('#TitleProjects')
  };


  clickOnLoginHome() {
    this.elements.loginButtonHome().click();
  }

  completeEmailTextbox() {
    this.elements.emailTextbox().type("enzoenzo@gmail.com");
  }

  completePasswordTextbox() {
    this.elements.passwordTextbox().type("enzoenzo");
  }
  clickOnloginModal() {
    this.elements.loginButtonModal().click();
  }

  checkLogin() {
    this.elements.projectsText().should('have.text', 'Projects');
  }


}

module.exports = new homeSaucePage();
