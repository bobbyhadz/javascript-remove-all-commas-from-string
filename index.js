// EXAMPLE 1 - Remove/Replace all Commas from a String in JavaScript

const str = '1,23,45.67';

const withoutCommas = str.replaceAll(',', '');
console.log(withoutCommas); // 👉️ '12345.67'

// ------------------------------------------------------------------

// // EXAMPLE 2 - Remove/Replace all Commas from a String using String.replace()

// const str = '1,23,45.67';

// const withoutCommas = str.replace(/,/g, '');

// console.log(withoutCommas); // 👉️ '12345.67'

// ------------------------------------------------------------------

// // EXAMPLE 3 - Remove/Replace all Commas from a String using split() and join()

// const str = 'bobby,hadz,com';

// const result = str.split(',').join('');

// console.log(result); // 👉️ bobbyhadzcom

// ------------------------------------------------------------------

// // EXAMPLE 4 - Replace only the first occurrence of a Comma in a string

// const str = '123,456,789';

// const replaceFirst = str.replace(/,/, '.');
// console.log(replaceFirst); // 👉️ 123.456,789
