# Convert Indian currency into words
**Example:** INR 35,45,650 will be converted to Thirty five lakhs forty five thousand six hundred and fifty rupees

**Note**: `Octal` numbers are converted to decimal before converting to words.

[Link to NPM Package](https://www.npmjs.com/package/inr-words)

> Note: version 2.0.0 and onwards, esm modules artifacts will be followed. For csm implementation, please follow lower versions.

## Install
```
npm install inr-words
```

## Usage
````
import {inrInWords as inr} from './index.js';

console.log(inr(3485)); 
// Output: three thousand four hundred eighty five rupees

console.log(inr(248745956.67));
// Output: twenty four crores eighty seven lakhs forty five thousand nine hundred fifty six rupees and sixty seven paise
````

## License
[ISC][LICENSE]

[LICENSE]: LICENSE