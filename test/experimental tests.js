
'use strict'
var assert = require('assert');
var typeOf = require('../typeOf.js');

var _typeExampls = {
  boolean: [true, false],
  number: [1, 5, NaN, 777],
  string: ['aaa', 'b=\nz', 'AAA/BBB/'],
  array: [ [], ['aaa', 'bbb'], [1, 2, 0], [1, '2', false] ],
  object: [ {}, {a:1}, {zzz:'za',xxx:false,ccc:[]} ],
  null: [], //TODO if possible =)
  function: [function(){}, ()=>{}],
  date: [new Date, new Date(), new Date(500), new Date('1-5-2016')],
  regexp: [new RegExp(), /a*b/i, /^nz$/],
  error: [new Error, new Error('aaaa')],
  undefined: [undefined]
};

describe('Experimental tests', () => {

  it('All types test', () => {
    fullTest(_typeExampls);
  });
});

function fullTest(testObj) {
  for (var typeVar in testObj) {
    for (var key in testObj) {
      var testArr = testObj[key];
      var isEqual = (typeVar === key);
      testArrayOfVars(testArr, isEqual, typeVar);
    }
  }

  function testArrayOfVars(arr, isEqual, type) {
    for (var i=0; i<arr.length; i++) {
      var value = arr[i];
      if (isEqual) {
        //console.log('%s: %s  +', value, type);
        assert.equal( typeOf(value), type );
      } else {
        //console.log('%s: %s  -', value, type);
        assert.notEqual( typeOf(value), type );
      }
    }
  }
}
