import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage");

Given("A user opens the Juice Shop App", () => {
  cy.visit("/");
});


When("User click on login button in home", () => {
  loginPage.clickOnLoginHome();
});

When("User complete email textbox", () => {
  loginPage.completeEmailTextbox();
});

When("User complete password textbox", () => {
  loginPage.completePasswordTextbox();
});

When("User click on login button in login", () => {
  loginPage.clickOnloginModal();
});

Then("The site shows landing page", () => {
  loginPage.checkLogin();
});

