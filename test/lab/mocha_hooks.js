class Counter {
    innerC;
    constructor() {
        this.innerC = 0;
    }
    get c() {
        this.innerC = this.innerC + 1;
        return this.innerC;
    }
}
let counter = new Counter();

console.log(`${counter.c} - file parsing`);
describe(`parent DESCRIBE block`, function() {
    console.log(
        `${counter.c} - file parsing - reading content of describe block`
    );

    before(function() {
        console.log(`${counter.c} - beforeAll execution`);
    });

    before(function() {
        console.log(
            `${counter.c} - beforeAll execution - executed in declaration order`
        );
    });

    beforeEach(function() {
        console.log(`${counter.c} - beforeEach execution`);
    });

    beforeEach(function() {
        console.log(
            `${counter.c} - beforeEach execution - executed in declaration order`
        );
    });

    after(function() {
        console.log(`${counter.c} - afterALL execution`);
    });

    afterEach(function() {
        console.log(`${counter.c} - afterEACH execution`);
    });

    describe(`Nested describe block`, function() {
        console.log(
            `${counter.c} - file parsing - reading nested describe blocks as well`
        );

        beforeEach(function() {
            console.log(`${counter.c} - Nested beforeEach executed!`);
        });

        it(`NESTED TEST!`, function() {
            console.log(`${counter.c} - NESTED TEST - executed`);
        });
    });
    
    // DATAPROVIDER
    let dataCollection = [1, 2, 3, 4, 5];
    dataCollection.map(data => {
        it(`${counter.c} TEST for ${data}`, function() {
            console.log(`TEST number ${data} executed!`);
        });
    });

    it('lazy asserts example', function () {
      const assert = require('assert');
      const errors = []
      try {
        assert(false, 'error message 1')
        console.log('error 1')
      } catch(err) {
        console.log(err.message)
        errors.push(err.message)
      }
      try {
        assert(false, 'error message 2')
        console.log('error 2')
      } catch(err) {
        console.log(err.message)
        errors.push(err.message)
      }
      try {
        assert(true, 'error message 3')
        console.log('error 3')
      } catch(err) {
        console.log(err.message)
        errors.push(err.message)
      }
      console.log('assertions done!')
      if (errors.length > 0) {
        throw new Error(JSON.stringify(errors, null, 2))
      }
    })
});
console.log(`${counter.c} - file parsing finished`);