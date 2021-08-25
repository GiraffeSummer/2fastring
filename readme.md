# 2fastring
## A simple 2fa string generator

2fa string is a generator I made to easily generate string for 2FA, I noticed that 2fa strings had
easy to remember patterns, so this library will not use more than a set amount of characters.



<br>

## Basic example
```js
const { GenerateNumber } = require('2fastring');
const number = GenerateNumber(); //ex: 733977
``` 

There's a few extra functions that you can use:
they can all be imported from the same require.

### GenerateNumber 
GenerateNumber generates a 2fa number string, a string with just numbers
```js
GenerateNumber(6, 3);
```
This function has 2 parameters (all optional): 
- `length` default: 6;
   length is how many characters the string will contain.
- `difference` default: 3;
   this is how many different characters the string will have.

<Br>


### GenerateString
GenerateNumber generates a 2fa number string, a string with just letters and numbers
```js
GenerateString(6, 4, false);
```
This function has 3 parameters (all optional): 
- `length` default: 6;
   length is how many characters the string will contain.
- `difference` default: 3;
   this is how many different characters the string will have.
- `allowNumbers` default: false;
   this is if the string may contain numbers.
   
<Br>


### GenerateFrom 
GenerateFrom generates a randomized string based on the array put in
```js
const randomArray = [0,1,2,3,5,6,7,8,9,'a','b','c','d','e','f'];
GenerateFrom(randomArray, 6);
```
This function has 2 parameters (all optional): 
- `fromArray` default: [] (last used array);
   an array of segments for the function to use.
- `length` default: 6;
   length is how many segments the string will contain.

<br>


### getLast 
getLast will return the last used array
```js
const number = GenerateNumber(); //ex: 733977
const last = getLast(); // ['3','9','7']
```