class ContactPageObj {
    getContactPageTitle(){
        return cy.get('.wizard-page-item.active')
    }
    enterFirstName(){
        return cy.get('#firstName').type('Harry')
    }
    enterLastName(){
        return cy.get('#lastName').type('Potter')
    }
    enterAddressLine1(){
        return cy.get('#addressLine1').type('10 Drowning Street')
    }
    enterPostcode(){
        return cy.get('#postcode').type('400706')
    }
    enterCity(){
        return cy.get('#city').type('London')
    }
    selectState(){
        return cy.get('#state').select('Queensland')
    }
    warningMessageforLastName(){
        return cy.contains('Last Name is required')
    }

}
export default ContactPageObj;