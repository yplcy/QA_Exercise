export class automationExercisePo {
    public get formSection(): string{
        return 'section[id=\'form\']';
    }

    // Login Form
    public get logInEmail(): string {
        return 'input[data-qa=\'login-email\']';
    }

    public get logInPassword(): string {
        return 'input[data-qa=\'login-password\']';
    }

    public get loginButton(): string {
        return 'button[data-qa=\'login-button\']';
    }

    // Sign Up Form
    public get signUpName(): string {
        return 'input[data-qa=\'signup-name\']';
    }

    public get signUpEmail(): string {
        return 'input[data-qa=\'signup-email\']';
    }

    public get signUpButton(): string {
        return 'button[data-qa=\'signup-button\']';
    }

    public get loginForm(): string {
        return 'div[class=\'login-form\']';
    }

    public get nameField(): string{
        return 'input[data-qa=\'name\']';
    }

    public get emailField(): string{
        return 'input[data-qa=\'email\']';
    }

    public get passwordField(): string{
        return 'input[data-qa=\'password\']';
    }

    public get firstNameField(): string{
        return 'input[data-qa=\'first_name\']';
    }

    public get lastNameField(): string{
        return 'input[data-qa=\'last_name\']';
    }

    public get addressField(): string{
        return 'input[data-qa=\'address\']';
    }

    public get countryField(): string{
        return 'select[data-qa=\'country\']';
    }

    public countryOptions( country : string ): string{
        return `option[value='${country}']`;
    }

    public get stateField(): string{
        return 'input[data-qa=\'state\']';
    }

    public get cityField(): string{
        return 'input[data-qa=\'city\']';
    }

    public get zipcodeField(): string{
        return 'input[data-qa=\'zipcode\']';
    }

    public get mobileNoField(): string{
        return 'input[data-qa=\'mobile_number\']';
    }

    public get createAccountButton(): string{
        return 'button[data-qa=\'create-account\']';
    }

    public get accountCreatedMsg(): string{
        return 'h2[data-qa=\'account-created\']'
    }

    // Homepage
    public get carouselSection(): string{
        return 'section[id=\'slider\']';
    }

    public get hompageCarousel(): string{
        return 'div[data-ride=\'carousel\']';
    }

    // header tabs
    public get logout(): string{
        return 'a[href=\'/logout\']';
    }
  }
  
  export default automationExercisePo
  