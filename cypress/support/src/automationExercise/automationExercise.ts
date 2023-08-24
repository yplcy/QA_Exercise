import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import automationExercisePo from '../../../pageobjects/automationExercise.po';
 
const automationExercisePO = new automationExercisePo();

Given('I launch Automation Exercise URL', () => {
    cy.visit('https://www.automationexercise.com/login');

    cy.intercept('GET', '**/getconfig/sodar?sv=200&tid=gda&tv=r20230822&st=env').as('urlLaunch')
    cy.wait('@urlLaunch', { timeout : 10000 });
    
    cy.get(automationExercisePO.formSection)
      .find(automationExercisePO.logInEmail, { timeout : 10000 })
      .should('be.visible');
    cy.get(automationExercisePO.formSection)
      .find(automationExercisePO.logInPassword)
      .should('be.visible');

    cy.get(automationExercisePO.formSection)
      .find(automationExercisePO.signUpName)
      .should('be.visible');
    cy.get(automationExercisePO.formSection)  
      .find(automationExercisePO.signUpEmail)
      .should('be.visible');
});


When('I fill in New User Sign up Form {string} {string}', ( name : string, emailAddress : string ) => {
    cy.get(automationExercisePO.formSection)
      .find(automationExercisePO.signUpName)
      .should('be.visible')
      .type(name);
    cy.get(automationExercisePO.formSection)  
      .find(automationExercisePO.signUpEmail)
      .should('be.visible')
      .type(emailAddress);

    cy.get(automationExercisePO.formSection)  
      .find(automationExercisePO.signUpButton)
      .should('be.visible')
      .click();
});

Then('I see Enter Account Information Form', ( ) => {
    cy.get(automationExercisePO.loginForm)
      .find(automationExercisePO.nameField)
      .should('be.visible');
    cy.get(automationExercisePO.loginForm)
      .find(automationExercisePO.emailField)
      .should('be.visible');
    cy.screenshot('I see Enter Account Information Form');
});


When('I fill Enter Account Information Form {string}', ( password : string ) => {
	cy.get(automationExercisePO.loginForm)
      .find(automationExercisePO.passwordField)
      .should('be.visible')
      .type(password);
});


Given('I fill Address Information Form {string} {string} {string} {string} {string} {string} {string} {string}', 
(firstName : string, lastName : string, 
    address : string, country : string, state : string,
    city : string, zipCode : string, mobileNo : string) => {
    cy.get(automationExercisePO.loginForm)
      .find(automationExercisePO.firstNameField)
      .should('be.visible')
      .type(firstName);

    cy.get(automationExercisePO.loginForm)
      .find(automationExercisePO.lastNameField)
      .should('be.visible')
      .type(lastName);

    cy.get(automationExercisePO.loginForm)
      .find(automationExercisePO.addressField)
      .should('be.visible')
      .type(address);

    cy.get(automationExercisePO.loginForm)
      .find(automationExercisePO.countryField)
      .should('be.visible')
      .realClick();
    cy.wrap(automationExercisePO.formSection)
      .get(automationExercisePO.loginForm)
      .find(automationExercisePO.countryOptions(country))
      .should('be.visible')
      .realClick();

    cy.get(automationExercisePO.loginForm)
      .find(automationExercisePO.stateField)
      .should('be.visible')
      .type(state);

    cy.get(automationExercisePO.loginForm)
      .find(automationExercisePO.cityField)
      .should('be.visible')
      .type(city);

    cy.get(automationExercisePO.loginForm)
      .find(automationExercisePO.zipcodeField)
      .should('be.visible')
      .type(zipCode);
    
    cy.get(automationExercisePO.loginForm)
      .find(automationExercisePO.mobileNoField)
      .should('be.visible')
      .type(mobileNo);
    
    cy.get(automationExercisePO.loginForm)
      .find(automationExercisePO.createAccountButton)
      .should('be.visible')
      .click();
});


Then('I see Account Created', () => {
	cy.get(automationExercisePO.formSection)
      .find(automationExercisePO.accountCreatedMsg)
      .should('be.visible');
    
    cy.screenshot('I see Account Created');
});


When('I log in as {string} {string}', ( email : string, password : string) => {
	cy.get(automationExercisePO.formSection)
      .find(automationExercisePO.logInEmail, { timeout : 10000 })
      .should('be.visible')
      .type(email);
    cy.get(automationExercisePO.formSection)
      .find(automationExercisePO.logInPassword)
      .should('be.visible')
      .type(password);

    cy.get(automationExercisePO.formSection)
      .find(automationExercisePO.loginButton)
      .should('be.visible')
      .click();
});


Then('I see Automation Exercise Homepage', () => {
	cy.get(automationExercisePO.carouselSection)
      .find(automationExercisePO.hompageCarousel)
      .should('be.visible');
    cy.screenshot('I see Automation Exercise Homepage');
});


When('I logout', () => {
	cy.get(automationExercisePO.logout)
      .should('be.visible')
      .click();
});


Then('I see Automation Exercise Page', () => {
	cy.get(automationExercisePO.formSection)
      .find(automationExercisePO.logInEmail, { timeout : 10000 })
      .should('be.visible');
    cy.get(automationExercisePO.formSection)
      .find(automationExercisePO.logInPassword)
      .should('be.visible');

    cy.get(automationExercisePO.formSection)
      .find(automationExercisePO.signUpName)
      .should('be.visible');
    cy.get(automationExercisePO.formSection)  
      .find(automationExercisePO.signUpEmail)
      .should('be.visible');

    cy.screenshot('I see Automation Exercise Page');
});
