'use strict';

function typeOf(input) {

  var inputType = typeof input;

  if (inputType === 'object') {
    if (input == null) return null;
    if ( Array.isArray(input) ) return 'arr';
    if (input instanceof Date) return 'date';
    if (input instanceof RegExp) return 'reg';
    if (input instanceof Error) return 'err';

    return 'obj';
  }

  if (inputType === 'boolean') return 'bool';
  if (inputType === 'number') return 'num';
  if (inputType === 'string') return 'str';
  if (inputType === 'function') return 'func';
  if (inputType === 'undefined') return 'undef';
  
  return inputType;
}

module.exports = typeOf;
