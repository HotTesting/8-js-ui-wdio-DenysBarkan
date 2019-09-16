
export class CustomerDetails {
    customerDetailsForm

    constructor() {
        this.customerDetailsForm = new CustomerDetailsForm()
    }

    private get customerDetailsContainer() {
        return $('div[id=box-checkout-customer]')
    }


    isFormDisplayed() {
        if(this.customerDetailsContainer.isDisplayed()) {
            return true
        } else {
            return false
        }
    }

    fillForm() {
        const testData = "test"
        const emailData = `test${new Date().getTime() / 1000}@test.com`

        this.firstName.click()
        browser.pause(1000)
        this.firstName.setValue(testData)

    }
}

class CustomerDetailsForm {
    
};