import { should } from 'chai';
import { CreateAccount } from "../../pageObjects/CreateAccount.page";
should();

describe('User Registration', function () {
    const userRegistration = new CreateAccount();
    
    beforeEach(function(){
        browser.reloadSession();
        browser.deleteCookies()
        browser.setWindowSize(1600, 900);
    });


    it('can register on website (customer from Ukraine)', function () {
        userRegistration.open()
        userRegistration.fillTheForm('ua');
        userRegistration.successMessage.isDisplayed().should.be.equal(true, "The user is not registred, check the parameters");
        userRegistration.getSuccessMessageText().should.to.include('Your customer account has been created.', 'User registered success message is invalid');
 
    });

    it('can register on website (customer from the USA)', function () {
        userRegistration.open()
        userRegistration.fillTheForm('usa');
        userRegistration.successMessage.isDisplayed().should.be.equal(true, "The user is not registred, check the parameters");
        userRegistration.getSuccessMessageText().should.to.include('Your customer account has been created.', 'User registered success message is invalid');
 
    });

    // it('can register on website (by functions)', function () {
    //     userRegistration.open()
    //     userRegistration.setFirstName('TestFirstName');
    //     userRegistration.setLastName('TestLastName');
    //     userRegistration.selectCountry('Ukraine');
    //     const eMail = userRegistration.generateEmail();
    //     userRegistration.setEmail(eMail);
    //     userRegistration.setPhoneNumber('+380441111111');
    //     userRegistration.setPassword(eMail);
    //     userRegistration.createAccountBtn.click();
    //     userRegistration.getSuccessMessageText().should.to.include('Your customer account has been created.', 'User registered success message is invalid');
    // });
   
    // // use from PO the selectors only
    // it('can register on website', function () {
    //     userRegistration.open();
    //     userRegistration.registrationForm.isDisplayed().should.be.true;       
    //     userRegistration.firstNameInput.setValue('TestFirstName');
    //     userRegistration.lastNameInput.setValue('TestLastName');    
    //     userRegistration.countrySelect.selectByVisibleText('Ukraine');  
    //     const email = (`test${new Date().getTime() / 1000}@test.com`);
    //     userRegistration.emailInput.setValue(email);
    //     userRegistration.phoneInput.setValue('+380441111111');
    //     userRegistration.passwordInput.setValue(email);
    //     userRegistration.confirmPasswordInput.setValue(email);
    //     userRegistration.createAccountBtn.click();
    //     userRegistration.successMessage.isDisplayed().should.be.equal(true, 'User registered success message should be visible');
    //     const messText = userRegistration.getSuccessMessageText();
    //     console.log(messText);
    //     userRegistration.getSuccessMessageText().should.include('Your customer account has been created.', 'User registered success message is invalid');
    // });
})