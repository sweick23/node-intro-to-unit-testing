const should  =   require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


describe('fizzBuzzer', function(){
    it('should be a multiple fo 3, 5, or 15', function(){
      const multiple = [
          {a: 30, expected: 'fizz-buzz'},
          {a:10, expected: 'buzz'},
          {a:6, expected: 'fizz'}
      ];

      multiple.forEach(function(num){
        const answer = fizzBuzzer(num.a);
        answer.should.equal(num.expected);
      });
    });
    it('should return number if not a multiple of 3 or 5', function(){
      [1,2,4,7].forEach(function(input){
        fizzBuzzer(input).should.equal(input);
      });
    });
    it('should throw an error if is not a number', function(){
      const badInputs = [true, false, 'NAN', 'a']
      badInputs.forEach(function(input){
        (function() {
          fizzBuzzer(input)
        }).should.throw(Error);
      });
    });

      });
