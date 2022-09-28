import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
// const homePage = require("../../pages/WelcomePage");
const homePage = require("../../pages/HomePage");


When("user click on button", function () {
  homePage.userClickOnLogin();
});


When("user complete field with blabla", function () {
  homePage.userCompletesFieldWithBlabla();
});


Then("system shows blabla", function () {
  return true;
});