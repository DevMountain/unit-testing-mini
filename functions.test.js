const functions = require('./functions');

test("returnTwo() should return 2.", () => {
  expect( functions.returnTwo() ).toEqual( 2 );
});

test("greeting() should return a dynamic greeting based on name.", () => {
  expect( functions.greeting('James') ).toEqual('Hello, James.');
  expect( functions.greeting('Jill') ).toEqual('Hello, Jill.');
});

describe("Math functions:", () => {
  test("add() should return a dynamic sum based on two number parameters.", () => {
    expect( functions.add( 1, 2 ) ).toEqual( 3 );
    expect( functions.add( 5, 9 ) ).toEqual( 14 );
  });

  test("multiply() should return a dynamic product based on two number parameters.", () => {
    expect( functions.multiply( 1, 2 ) ).toEqual( 2 );
    expect( functions.multiply( 5, 9 ) ).toEqual( 45 );
  });

  test("divide() should return a dynamic quotient based on two number parameters.", () => {
    expect( functions.divide( 2, 1 ) ).toEqual( 2 );
    expect( functions.divide( 9, 3 ) ).toEqual( 3 );
  });

  test("subtract() should return a dynamic difference based on two number parameters.", () => {
    expect( functions.subtract( 2, 1 ) ).toEqual( 1 );
    expect( functions.subtract( 9, 3 ) ).toEqual( 6 );
  });
});

