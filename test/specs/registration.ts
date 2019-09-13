import { should } from 'chai';
import { Registration } from "../../pageObjects/AccountMenagment.page";
should();
describe('User Registration', function () {
    const registration = new Registration();
    beforeEach(function(){
        browser.setWindowSize(1600, 900);
    });
    afterEach(function(){
        browser.refresh();
    });
    it.only('can register on website', function () {
        registration.open();
        registration.registrationForm.isDisplayed().should.be.true;       
        registration.firstNameInput.setValue('TestFirstName');
        registration.lastNameInput.setValue('TestLastName');    
        registration.countrySelect.selectByVisibleText('Ukraine');  
        const email = (`test${new Date().getTime() / 1000}@test.com`);
        registration.emailInput.setValue(email);
        registration.phoneInput.setValue('+380441111111');
        registration.passwordInput.setValue(email);
        registration.confirmPasswordInput.setValue(email);
        registration.createAccountBtn();
        registration.successMessage.isDisplayed().should.be.equal(true, 'User registered success message should be visible');
        const messText = registration.getSuccessMessageText();
        console.log(messText);
        registration.getSuccessMessageText().should.include('Your customer account has been created.', 'User registered success message is invalid');
    });
    it.skip('can register on website', function () {
        browser.url('/create_account');
        const registrationForm = $('form[name="customer_form"]');
        const firstNameInput = registrationForm.$('input[name="firstname"]');
        firstNameInput.setValue('TestFirstName');
        const lastNameInput = registrationForm.$('input[name="lastname"]');
        lastNameInput.setValue('TestLastName');
        const countrySelect = registrationForm.$('select[name="country_code"]');
        countrySelect.selectByVisibleText('Ukraine');
        const emailInput = registrationForm.$('input[name="email"]');
        const email = (`test${new Date().getTime() / 1000}@test.com`);
        emailInput.setValue(email);
        const phoneInput = registrationForm.$('input[name="phone"]');
        phoneInput.setValue('+380441111111');
        const passwordInput = registrationForm.$('input[name="password"]');
        passwordInput.setValue(email);
        const confirmPasswordInput = registrationForm.$('input[name="confirmed_password"]');
        confirmPasswordInput.setValue(email);
        const createAccountButton = registrationForm.$('button[name="create_account"]');
        createAccountButton.click();

        const successMessage = $('#notices .alert-success');
        //assert(successMessage.isDisplayed(), 'User registered success message should be visible');

        const text = successMessage.getText();
        console.log('got message ', text);
        //assert.include(text,'Your customer account has been created.', 'User registered success message is invalid');
    });
})