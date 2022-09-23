import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const welcomePage = require("../../pages/WelcomePage");

Given("A user opens the Juice Shop App", () => {
  cy.visit("/");
});


When("User close Welcome pop up", () => {
  welcomePage.clicksOnClose();
});

When("User clicks on Menu", () => {
  welcomePage.clicksOnMenu();
});


Then("The site must show Customer Feedback text", () => {
  welcomePage.checkTextMenu();
});

