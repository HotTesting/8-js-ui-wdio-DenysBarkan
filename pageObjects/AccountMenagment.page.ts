export class Registration {

    open(){
        browser.url('/create_account');
        this.registrationForm.waitForDisplayed();
    }

    createAccountBtn(){
        this.registrationForm.$('button[name="create_account"]').click();
    }

    
    get registrationForm() { return $('form[name="customer_form"]'); }
    get firstNameInput() { return this.registrationForm.$('input[name="firstname"]');}
    get lastNameInput() { return this.registrationForm.$('input[name="lastname"]'); }
    get countrySelect() { return this.registrationForm.$('select[name="country_code"]'); }
    get emailInput() { return this.registrationForm.$('input[name="email"]'); }
    get phoneInput() { return this.registrationForm.$('input[name="phone"]'); }
    get passwordInput() { return this.registrationForm.$('input[name="password"]'); }
    get confirmPasswordInput() { return this.registrationForm.$('input[name="confirmed_password"]'); }

    get successMessage() { return $('#notices .alert-success'); }

    getSuccessMessageText(){
        return this.successMessage.getText();
    }


}
