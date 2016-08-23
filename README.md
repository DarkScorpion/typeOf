## TypeOf (short version)

[![Build Status](https://travis-ci.org/DarkScorpion/typeOf.svg?branch=m)](https://travis-ci.org/DarkScorpion/typeOf)

The module exports a single function that returns one of the 11 types of javascript.  
Written more for personal use, so as not to depend on the ["npm leftpad problem"] [leftpad].

#### Examples
```js
var typeOf = require('typeOf');

typeOf(false) //=> 'bool'
typeOf(5) //=> 'num'
typeOf('aaaa') //=> 'str'
typeOf([1,2]) //=> 'arr'
typeOf({a1:'b1'}) //=> 'obj'
typeOf(null) //=> null
typeOf(function(){}) //=> 'func'
typeOf(new Date) //=> 'date'
typeOf(/aaa/i) //=> 'reg'
typeOf(new Error()) //=> 'err'
typeOf(undefined) //=> 'undef'
```

[leftpad]: http://www.haneycodes.net/npm-left-pad-have-we-forgotten-how-to-program/
