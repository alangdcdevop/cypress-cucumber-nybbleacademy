import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const welcomePage = require("../../pages/LoginPage");




When("User clicks on {string}", (button) => {
  cy.get(button).click();
});

Then("Element {string} shows message {string}", (element, message) => {
  cy.get(element).should('have.text', message)
});

