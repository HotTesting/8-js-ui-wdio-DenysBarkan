import { UkrCustomerModel,USACustomerModel } from '../dataModel/CustomerData'

export class CreateAccount {

    get registrationForm() { return $('form[name="customer_form"]'); }
    get firstNameInput() { return this.registrationForm.$('input[name="firstname"]');}
    get lastNameInput() { return this.registrationForm.$('input[name="lastname"]'); }
    get countrySelect() { return this.registrationForm.$('select[name="country_code"]'); }
    get emailInput() { return this.registrationForm.$('input[name="email"]'); }
    get phoneInput() { return this.registrationForm.$('input[name="phone"]'); }
    get passwordInput() { return this.registrationForm.$('input[name="password"]'); }
    get confirmPasswordInput() { return this.registrationForm.$('input[name="confirmed_password"]'); }

    get successMessage() { return $('#notices .alert-success'); }

    get createAccountBtn(){
        return this.registrationForm.$('button[name="create_account"]');
    }

    getSuccessMessageText(){
        return this.successMessage.getText();
    }

    open(){
        browser.url('/create_account');
        this.registrationForm.waitForDisplayed();
    }

    setFirstName(firstName){
        this.firstNameInput.click();
        this.firstNameInput.setValue(firstName);
    }
    setLastName(lastName){
        this.lastNameInput.click();
        this.lastNameInput.setValue(lastName);
    }

    selectCountry(country){
        this.countrySelect.click();
        this.countrySelect.selectByVisibleText(country);
    }

    generateEmail(){
        const eMail = (`test${new Date().getTime() / 1000}@test.com`);
        return eMail;
    }

    setEmail(mail){
        this.emailInput.setValue(mail);
    }

    setPhoneNumber(phone){
        this.phoneInput.click();
        this.phoneInput.setValue(phone);
    }

    setPassword(pass){
        this.passwordInput.click();
        this.passwordInput.setValue(pass);
        this.confirmPasswordInput.click();
        this.confirmPasswordInput.setValue(pass);
    }

        customerUA = new UkrCustomerModel();
        customerUSA = new USACustomerModel();
        customerData;
    
    fillTheForm (atr){
        if(atr == "ua"){
        this.customerData = this.customerUA;
    } else if(atr == 'usa'){ 
        this.customerData = this.customerUSA;
    }
        this.setFirstName(this.customerData.firstName);
        this.setLastName(this.customerData.lastName);
        this.selectCountry(this.customerData.country);
        this.setEmail(this.customerData.email);
        this.setPhoneNumber(this.customerData.phone);
        this.setPassword(this.customerData.password);
        this.createAccountBtn.click();
    }


}
