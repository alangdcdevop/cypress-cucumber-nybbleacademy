class homeSaucePage {
  elements = {
    closeButton: () => cy.get('.close-dialog'),
    menuButtonOne: () => cy.get('[aria-label="Open Sidenav"]'),
    menuButtonTwo: () => cy.get('.cc-btn'),
    menuText: () => cy.get('[routerlink="/contact"] > .mat-list-item-content > .menu-text'),
  };


  clicksOnClose() {
    this.elements.closeButton().click();
  }

  clicksOnMenu() {
    this.elements.menuButtonOne().click();
    this.elements.menuButtonTwo().click();
  }

  checkTextMenu() {
    this.elements.menuText().should('have.text', ' Customer Feedback ')
  }


}

module.exports = new homeSaucePage();
