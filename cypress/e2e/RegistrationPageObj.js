class RegistrationPageObj{
    getBaseTitle(){
        return cy.title()
    }
    getRegistrationPageTitle(){
        return cy.get('.wizard-page-item.active')
    }
    enterEmailAddress(){
        return cy.get('#emailAddress').type('testuser@gmail.com')
    }
    enterPassword(){
        return cy.get('#password').type('testpassword')
    }
    enterConfirmPasswordText(){
        return cy.get('#confirmPassword').type('testpassword')
    }
    findNextButton(){
        return cy.get('.wizard-button.primary')
    }
    
}
export default RegistrationPageObj;