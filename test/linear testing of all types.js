'use strict'
var assert = require('assert');
var typeOf = require('../typeOf.js');

var _exampleVars = [
  true, 5, 'aaa', [], {}, null, function(){}, new Date(), /abc/, new Error('error'), undefined
];

describe('Linear test variables', () => {

  it('Boolean', () => {
    testOnAllTypes(0, 'boolean');
  });

  it('Number', () => {
    testOnAllTypes(1, 'number');
  });

  it('String', () => {
    testOnAllTypes(2, 'string');
  });

  it('Array', () => {
    testOnAllTypes(3, 'array');
  });

  it('Object', () => {
    testOnAllTypes(4, 'object');
  });

  it('Null', () => {
    testOnAllTypes(5, null);
  });

  it('Function', () => {
    testOnAllTypes(6, 'function');
  });

  it('Date', () => {
    testOnAllTypes(7, 'date');
  });

  it('RegExp', () => {
    testOnAllTypes(8, 'regexp');
  });

  it('Error', () => {
    testOnAllTypes(9, 'error');
  });

  it('Undefined', () => {
    testOnAllTypes(10, 'undefined');
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
