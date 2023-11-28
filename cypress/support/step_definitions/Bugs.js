import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import RegistrationPageObj from "../../e2e/RegistrationPageObj";
import ContactPageObj from "../../e2e/ContactPageObj";
const registrationpgobj = new RegistrationPageObj;
const contactpgobj = new ContactPageObj;

Given('user navigates to the registration page', () => {
    cy.visit('/')
    registrationpgobj.getBaseTitle().should('eq','Orikan UI Automation Test')
})

When('user is on registration page', () => {
    registrationpgobj.getRegistrationPageTitle().contains('Registration')
})

When('user provides input for all fields on registration page', () => {
    registrationpgobj.enterEmailAddress();
    registrationpgobj.enterPassword();
    registrationpgobj.enterConfirmPasswordText();
})

When('user click on next button', () => {
    registrationpgobj.findNextButton().click()
})

Then('user is on Contact Page', () => {
    contactpgobj.getContactPageTitle().contains('Contact')
})

When('user provides input for all required fields on Contact Page', () => {
    contactpgobj.enterFirstName()
    contactpgobj.enterLastName()
    contactpgobj.enterAddressLine1()
    contactpgobj.enterPostcode()
    contactpgobj.enterCity()
    contactpgobj.selectState().should('have.value','4: QLD')
})

When('user remove the text in Last Name field', () => {
    contactpgobj.enterLastName().clear()
})

Then('user should see warning message to provide input for Last Name field', () => {
    contactpgobj.warningMessageforLastName().should('exist')
})

When('user provides input for all required fields except city on Contact Page', () => {
    contactpgobj.enterFirstName()
    contactpgobj.enterLastName()
    contactpgobj.enterAddressLine1()
    contactpgobj.enterPostcode()
    contactpgobj.selectState().should('have.value','4: QLD')
})

Then('verify that Contact Page number is still surrounded by light green colour', () => {
    // the below will fail only if the page number of payment page gets highlighted with light green colour and the page number of contact page gets surrounded by dark green colour 
    contactpgobj.getContactPageTitle().contains('Contact')
})