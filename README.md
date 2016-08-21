## TypeOf

[![Build Status](https://travis-ci.org/DarkScorpion/typeOf.svg?branch=m)](https://travis-ci.org/DarkScorpion/typeOf)

The module exports a single function that returns one of the 11 types of javascript.  
Written more for personal use, so as not to depend on the ["npm leftpad problem"] [leftpad].

#### Examples
```js
var typeOf = require('typeOf');

typeOf(false) //=> 'boolean'
typeOf(5) //=> 'number'
typeOf('aaaa') //=> 'string'
typeOf([1,2]) //=> 'array'
typeOf({a1:'b1'}) //=> 'object'
typeOf(null) //=> null
typeOf(function(){}) //=> 'function'
typeOf(new Date) //=> 'date'
typeOf(/aaa/i) //=> 'regexp'
typeOf(new Error()) //=> 'error'
typeOf(undefined) //=> 'undefined'
```

[leftpad]: http://www.haneycodes.net/npm-left-pad-have-we-forgotten-how-to-program/
