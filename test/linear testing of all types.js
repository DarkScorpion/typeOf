'use strict'
var assert = require('assert');
var typeOf = require('../typeOf.js');

var _exampleVars = [
  true, 5, 'aaa', [], {}, null, function(){}, new Date(), /abc/, new Error('error'), undefined
];

describe('Linear test variables', () => {
  
  it('Boolean | bool', () => {
    testOnAllTypes(0, 'bool');
  });

  it('Number | num', () => {
    testOnAllTypes(1, 'num');
  });

  it('String | str', () => {
    testOnAllTypes(2, 'str');
  });

  it('Array | arr', () => {
    testOnAllTypes(3, 'arr');
  });

  it('Object | obj', () => {
    testOnAllTypes(4, 'obj');
  });

  it('Null | null', () => {
    testOnAllTypes(5, null);
  });

  it('Function | func', () => {
    testOnAllTypes(6, 'func');
  });

  it('Date | data', () => {
    testOnAllTypes(7, 'date');
  });

  it('RegExp | reg', () => {
    testOnAllTypes(8, 'reg');
  });

  it('Error | err', () => {
    testOnAllTypes(9, 'err');
  });

  it('Undefined | undef', () => {
    testOnAllTypes(10, 'undef');
  });

});

function testOnAllTypes(eqNumber, type) {
  for (var i=0; i<_exampleVars.length; i++) {
    var value = _exampleVars[i];
    if (i == eqNumber)
      assert.equal( typeOf(value), type );
    else
      assert.notEqual( typeOf(value), type );
  }
}

//Debug function
function logAll() {
  for (var i=0; i<_exampleVars.length; i++) {
    var value = _exampleVars[i];
    console.log('%s: %s', value, typeof value);
  }
}
