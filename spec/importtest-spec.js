import { okGame } from '../src/javascripts/learning-reference/gameMessage';

describe('Mock test for jasmine - test import export works as expected', function () {
   
    it('Create correct message', function () {
      
        expect(okGame('Football')).toEqual('Football ok!');
        
    });

});
