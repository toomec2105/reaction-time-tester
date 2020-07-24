/*eslint-env node, jasmine */

const helper = require ('../src/javascripts/learning-reference/for-jasmine-test-only');

describe('Mock test for jasmine', function () {
   
    it('Add 2 to 3', function () {
        let sum = helper.addTwoNumbersWithLodash(2,3);
        expect(sum).toEqual(5);
    });

});

