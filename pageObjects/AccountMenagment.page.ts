import { Registration } from "./components/userRegistration";

export class CreateAccount {

    registration = new Registration();

    open(){
        browser.url('/create_account');
        this.registration.registrationForm.waitForDisplayed();
    }

    setFirstName(firstName){
        this.registration.firstNameInput.click();
        this.registration.firstNameInput.setValue(firstName);
    }
    setLastName(lastName){
        this.registration.lastNameInput.click();
        this.registration.lastNameInput.setValue(lastName);
    }

    selectCountry(country){
        this.registration.countrySelect.click();
        this.registration.countrySelect.selectByVisibleText(country);
    }

    generateEmail(){
        const eMail = (`test${new Date().getTime() / 1000}@test.com`);
        return eMail;
    }

    setEmail(mail){
        // this.registration.emailInput.click();
        this.registration.emailInput.setValue(mail);
    }

    setPhoneNumber(phone){
        this.registration.phoneInput.click();
        this.registration.phoneInput.setValue(phone);
    }

    setPassword(pass){
        this.registration.passwordInput.click();
        this.registration.passwordInput.setValue(pass);
        this.registration.confirmPasswordInput.click();
        this.registration.confirmPasswordInput.setValue(pass);
    }




}
