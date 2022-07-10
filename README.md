# Convert Indian currency into words
**Example:** INR 35,45,650 will be converted to Thirty five lakhs forty five thousand six hundred and fifty rupees

**Note**: `Octal` numbers are converted to decimal before converting to words.

[Link to NPM Package](https://www.npmjs.com/package/inr-words)

## Install
```sh
npm install inr-words
```

## Usage
````
const inr = require('inr-words');

console.log(inr(3485)); 
// Output: three thousand four hundred eighty five rupees

console.log(inr(248745956.67));
// Output: twenty four crores eighty seven lakhs forty five thousand nine hundred fifty six rupees and sixty seven paise
````

## License
[ISC][LICENSE]

[LICENSE]: LICENSE