export class CustomerModel {
    company: string
    tax: string
    firstName: string
    lastName: string
    address1: string
    address2: string
    city: string
    zipCode: string
    country: string
    phone: string
    email: string
    tData = `test${new Date().getTime() / 1000}@test.com`
}

export class ValidUkrCustomerModel extends CustomerModel {
    constructor() {
        super();
        this.company = "myCompany";
        this.tax = '444'
        this.firstName = "TestFirstName";
        this.lastName = "TestLastName";
        this.address1 = "Lubaja 8";
        this.address2 = "Lubaja 8/2";
        this.city = "Kyiv";
        this.country = "Ukraine";
        this.zipCode = '16500';
        this.phone = '+380441112233';
        this.email = this.tData;
    }
}

export class ValidUSACustomerModel extends CustomerModel {
    constructor() {
        super();
        this.company = "myUSACompany";
        this.tax = "13"
        this.firstName = "John";
        this.lastName = "Miles";
        this.address1 = "Washington str";
        this.address2 = "Washington str 4";
        this.city = "Austin";
        this.zipCode = "2105u";
        this.phone = "+1-009-123-22-33";
        this.email = this.tData;
    }
}
