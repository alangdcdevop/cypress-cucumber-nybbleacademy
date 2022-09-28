Feature: Simple example

    Description about the story or feature.

    Background:
        Given A user opens the Juice Shop App

    Scenario: Close pop up (with step definition)
        When User close Welcome pop up
        And User clicks on Menu
        Then The site must show Customer Feedback text

  Scenario: Close pop up (with parameter pass)
        When User clicks on '.close-dialog'
        And User clicks on '[aria-label="Open Sidenav"]'
        And User clicks on '.cc-btn'
        Then Element '[routerlink="/contact"] > .mat-list-item-content > .menu-text' shows message ' Customer Feedback '