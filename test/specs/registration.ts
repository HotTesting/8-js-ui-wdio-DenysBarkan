import { should } from 'chai';
import { CreateAccount } from "../../pageObjects/AccountMenagment.page";
should();

describe('User Registration', function () {
    const userRegistration = new CreateAccount();
    
    beforeEach(function(){
        browser.reloadSession();
        browser.deleteCookies()
        browser.setWindowSize(1600, 900);
    });

    
    it('can register on website', function () {
        userRegistration.open();
        userRegistration.registration.registrationForm.isDisplayed().should.be.true;       
        userRegistration.registration.firstNameInput.setValue('TestFirstName');
        userRegistration.registration.lastNameInput.setValue('TestLastName');    
        userRegistration.registration.countrySelect.selectByVisibleText('Ukraine');  
        const email = (`test${new Date().getTime() / 1000}@test.com`);
        userRegistration.registration.emailInput.setValue(email);
        userRegistration.registration.phoneInput.setValue('+380441111111');
        userRegistration.registration.passwordInput.setValue(email);
        userRegistration.registration.confirmPasswordInput.setValue(email);
        userRegistration.registration.createAccountBtn.click();
        userRegistration.registration.successMessage.isDisplayed().should.be.equal(true, 'User registered success message should be visible');
        const messText = userRegistration.registration.getSuccessMessageText();
        console.log(messText);
        userRegistration.registration.getSuccessMessageText().should.include('Your customer account has been created.', 'User registered success message is invalid');
    });

    it('can register on website', function () {
        userRegistration.open()
        userRegistration.setFirstName('TestFirstName');
        userRegistration.setLastName('TestLastName');
        userRegistration.selectCountry('Ukraine');
        const eMail = userRegistration.generateEmail();
        userRegistration.setEmail(eMail);
        userRegistration.setPhoneNumber('+380441111111');
        userRegistration.setPassword(eMail);
        userRegistration.registration.createAccountBtn.click();
        // userRegistration.registration.successMessage.isDisplayed().should.be.true;
        userRegistration.registration.getSuccessMessageText().should.to.include('Your customer account has been created.', 'User registered success message is invalid');
        // firstNameInput.setValue('TestFirstName');

        // lastNameInput.setValue('TestLastName');
        
        // countrySelect.selectByVisibleText('Ukraine');
        
        // const email = (`test${new Date().getTime() / 1000}@test.com`);
        // emailInput.setValue(email);

        // phoneInput.setValue('+380441111111');

        // passwordInput.setValue(email);
        // const confirmPasswordInput = registrationForm.$('input[name="confirmed_password"]');
        // confirmPasswordInput.setValue(email);

        // const createAccountButton = registrationForm.$('button[name="create_account"]');
        // createAccountButton.click();

        // const successMessage = $('#notices .alert-success');
        //assert(successMessage.isDisplayed(), 'User registered success message should be visible');

        // const text = successMessage.getText();
        // console.log('got message ', text);
        //assert.include(text,'Your customer account has been created.', 'User registered success message is invalid');
    });
})