Feature: finding bugs

    The aim of this feature file is to find bugs as mentioned in task#1

    Background: Initial common steps
        Given user navigates to the registration page
        When user is on registration page
        And user provides input for all fields on registration page
        When user click on next button
        Then user is on Contact Page

    Scenario: Verify warning message for Last Name field in contact page
        When user provides input for all required fields on Contact Page
        And user remove the text in Last Name field
        When user click on next button
        Then user should see warning message to provide input for Last Name field

    Scenario: Verify behaviour of Page number surrounded colour       
        When user provides input for all required fields except city on Contact Page
        When user click on next button
        Then verify that Contact Page number is still surrounded by light green colour