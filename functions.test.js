const functions = require('./functions');

test("returnTwo() should return 2.", () => {
  expect( functions.returnTwo() ).toEqual( 2 );
});

test("greeting() should return a dynamic greeting based on name.", () => {
  expect( functions.greeting('James') ).toEqual('Hello, James.');
  expect( functions.greeting('Jill') ).toEqual('Hello, Jill.');
});

test("add() should return a dynamic sum based on two number parameters.", () => {
  expect( functions.add( 1, 2 ) ).toEqual( 3 );
  expect( functions.add( 5, 9 ) ).toEqual( 14 );
});
