const {assert} = require('chai');

describe("Items search", function() {

    it("should show results in case multiple items matches", function() {
        browser.url(`/`);
        browser.fullscreenWindow();

        const srch = $('#site-menu input[name="query"]');
        srch.setValue("Duck");
        browser.keys("\uE007");
        assert.include($("#content #box-search-results .title").getText(), "Duck", 'Search function is not working');
        browser.back();
        browser.pause(2000);
    });

    it("should redirect to item page in case only one result matches", function() {
        //throw new Error("NOT IMPLEMENTED");
        const srch = $('#site-menu input[name="query"]');
        srch.setValue("Yellow");
        browser.keys("\uE007");
        assert.include($("#content #box-product").getAttribute('data-name'), "Yellow Duck", 'Search function is not working');
        browser.back();
        browser.pause(2000);

    });

    it("should redirect to 'no matching results' in case no items matched", function() {
        browser.url(`/`);
        const srch = $('#site-menu input[name="query"]');
        srch.setValue("Some Value");
        browser.keys("\uE007");
        assert.include($("#box-search-results").getText(), "Some Value", 'Search function is not working');
        assert.include($("#box-search-results div").getText(), "No matching results", 'Search function is not working');
        browser.back()
    });
});

describe("Search results sorting", function() {
    it("correctly arranges items when using 'by price' sorting", function() {
        browser.url(`/search?query=Duck`);
        const btnLine = $$('#content .btn-group a.btn');
        for (let i = 0 ; i < btnLine.length; i++){
            let btnName = btnLine[i].getText();
            if(btnName.includes('Price')){
                btnLine[i].click();
                //browser.pause(2000);
            }
        }
        const products = $$('#content .products .product');
        let newProd = [];
        for (let p = 0 ; p < products.length; p++){
            let pr = products[p].getAttribute('data-price');
            newProd.push(pr);
        }
        //console.log('by price ', newProd);
        assert.isTrue(Math.min(...newProd) == newProd[0], "The first product is not a lowest price");
        assert.isTrue(Math.max(...newProd) == newProd[newProd.length-1], "The last product is not the expensive");

    });

    it("correctly arranges items when using 'by name' sorting", function() {
        browser.url(`/search?query=Duck`)
        const btnLine = $$('#content .btn-group a.btn');
        for (let i = 0 ; i < btnLine.length; i++){
            let btnName = btnLine[i].getText();
            if(btnName.includes('Name')){
                btnLine[i].click();
                //browser.pause(3000);
            }
        }
        const products = $$('#content .products .product');
        let newProd = [];
        for (let p = 0 ; p < products.length; p++){
            let pr = products[p].getAttribute('data-name');
            newProd.push(pr);
        }

        assert.isTrue(newProd[0][0] < newProd[1][0], "the first item is not the first by alphabet");
        assert.isTrue(newProd[newProd.length-1][0] > newProd[newProd.length-2][0], "the last one item is not the last one");
    });
});

// BONUS LEVEL - this test gives you 15 points
describe("Contact us form", function() {
    it("must send messages to shop administration", function() {
        browser.url(`/customer-service-s-0`);
        const contactUsForm = $('#box-contact-us form[name="contact_form"] ');
        const name = contactUsForm.$('input[name="name"]');
        name.setValue('TestName');
        const emailInput = contactUsForm.$('input[name="email"]');
        const email = (`test${new Date().getTime() / 1000}@test.com`);
        emailInput.setValue(email);
        const subject = contactUsForm.$('input[name="subject"]');
        subject.setValue("Testing message");
        const textArea = contactUsForm.$('textarea[name="message"]');
        textArea.setValue("The testing message should be delivered onto the Customer Service office ");
        textArea.addValue(" Signature");
        browser.pause(2000);
        const sendBtn = contactUsForm.$('button[name="send"]');
        sendBtn.click();
        browser.pause(3000);
        const successAlert = $('#content #notices .alert-success');
        assert(successAlert.isDisplayed(), 'The alert of the message delivery should be shown');
        const successMessage = successAlert.getText();
        assert.include(successMessage, "Your email has successfully been sent", "The alert is not shown");
    });
});