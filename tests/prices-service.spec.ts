import { PricesService } from '../src/app/_services/prices.service';
import { assert } from 'chai';

// ระดับราคาช่วงราคา (เริ่มใช้ตั้งแต่ 30 มีนาคม 2552 เป็นต้นไป)
// ต่ำกว่า 2 บาท 0.01 บาท
// ตั้งแต่ 2 บาท แต่ต่ำกว่า 5 บาท 0.02 บาท
// ตั้งแต่ 5 บาท แต่ต่ำกว่า 10 บาท 0.05 บาท
// ตั้งแต่ 10 บาท แต่ต่ำกว่า 25 บาท 0.10 บาท
// ตั้งแต่ 25 บาท แต่ต่ำกว่า 100 บาท 0.25 บาท
// ตั้งแต่ 100 บาท แต่ต่ำกว่า 200 บาท 0.50 บาท
// ตั้งแต่ 200 บาท แต่ต่ำกว่า 400 บาท 1.00 บาท
// ตั้งแต่ 400 บาทขึ้นไป 2.00 บาท

describe('GetAbovePrice', () => {

  let ps: PricesService;

  beforeEach(() => {
    ps = new PricesService();
  });

  it('above from 4.96 for 5 slots is 5.15', () => {
    const p = ps.getAbovePrice(4.96, 5);
    assert.equal(p, 5.15);
  });

});

describe('GetBelowPrice', () => { });

describe('IsValidPrice', () => {

  let sut: PricesService;

  beforeEach(() => {
    sut = new PricesService();
  });

  it('10.0 is a valid price', () => {
    const b = sut.isValidPrice(10.0);
    assert.isTrue(b);
  });

  it('10.02 is not a valid price', () => {
    const b = sut.isValidPrice(10.02);
    assert.isFalse(b);
  });

});

describe('GetPrices', () => {

  let sut: PricesService;

  beforeEach(() => {
    sut = new PricesService();
  });

  // it('print all prices', () => {
  //   const result = sut.allPrices();
  //   printArray(result);
  // });

  it('across ranges (2 - 10)', () => {
    const result = sut.getPrices(4.96, 5.10);
    printArray(result);
    assertArray(result, [4.96, 4.98, 5.0, 5.05, 5.1]);
  });

  it('in single range (5 - 10)', () => {
    const result = sut.getPrices(5.0, 5.15);
    printArray(result);
    assertArray(result, [5.0, 5.05, 5.1, 5.15]);
  });

  it('in single range (2 - 5)', () => {
    const result = sut.getPrices(2.0, 2.10);

    printArray(result);
    assertArray(result, [2.0, 2.02, 2.04, 2.06, 2.08, 2.10]);
  });

  it('single price', () => {
    const result = sut.getPrices(10.0, 10.0);

    assert.equal(result.length, 1);
    assert.equal(result[0], 10);
  });

});

function printArray(arr: any[]) {
  console.log(arr);
  // console.log('[');
  // arr.forEach(x => {
  //   console.log(x + ',');
  // });
  // console.log(']');
}

function assertArray(actual: any[], expected: any[]) {
  if (expected === null && actual !== null) {
    throw new Error('Actual should be null');
  }
  if (actual.length !== expected.length) {
    throw new Error('Length is not same as expected');
  }

  for (let n = 0; n < expected.length; n++) {
    if (actual[n] !== expected[n]) {
      throw new Error('Value was incorrect at index ' + n);
    }
  }
}
