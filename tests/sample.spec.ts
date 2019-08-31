import { assert } from 'chai';
import { Calculator } from './calculator';

describe('My first test', () => {

  // test method
  it('can add two number', () => {
    // arrange
    const calc = new Calculator();

    // act
    const result = calc.add(5, 6);

    // assert
    assert.equal(result, 11);
  });

});
