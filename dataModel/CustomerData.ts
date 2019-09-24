export class CustomerModel {
    company: string;
    tax: string;
    firstName: string;
    lastName: string;
    address1: string;
    address2: string;
    city: string;
    zipCode: string;
    country: string;
    phone: string;
    email: string;
    password: string;
    // tData = `test${new Date().getTime() / 1000}`
    tData = `test${Date.now() / 1000}`
}

export class UkrCustomerModel extends CustomerModel {
    constructor() {
        super();
        const ttData = this.tData + "@test.ua.com";
        this.company = "myCompany";
        this.tax = '444';
        this.firstName = "TestFirstName";
        this.lastName = "TestLastName";
        this.address1 = "Lubaja 8";
        this.address2 = "Lubaja 8/2";
        this.city = "Kyiv";
        this.country = "Ukraine";
        this.zipCode = '04210';
        this.phone = '+380441112233';
        this.email = ttData;
        this.password = ttData;
    }
}

export class USACustomerModel extends CustomerModel {
    constructor() {
        super();
        const ttData = this.tData + "@test.usa.com";
        this.company = "myUSACompany";
        this.tax = "13";
        this.firstName = "John";
        this.lastName = "Miles";
        this.address1 = "Washington str";
        this.address2 = "Washington str 4";
        this.country = "United States";
        this.city = "Austin";
        this.zipCode = "12345";
        this.phone = "+1-009-123-22-33";
        this.email = ttData;
        this.password = ttData;
    }
}
