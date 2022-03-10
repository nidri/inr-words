
const TEN = 10;
const ONE_HUNDRED = 100;
const ONE_THOUSAND = 1000;
const ONE_LAKH = 100000;
const TEN_LAKHS = 1000000;
const ONE_CRORE = 10000000;
const TEN_CRORES = 100000000;

const LESS_THAN_TWENTY = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

const TENTHS_LESS_THAN_HUNDRED = [
    'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

let number = 0;
let firstPart = 0;
let secondPart = 0;
let firstPartString = "";
let secondPartString = "";
let fullString = "";

const inrInWords = function (inr) {
    
    try {
        if (!isFinite(inr)) {
            throw new TypeError(
                `Invalid number format: ${inr} (${typeof inr})`
            );
        }

        // number = removeLeadingZeros(inr); // Convert from Octal to decimal
        let stringInr = inr.toString();
        let parts = stringInr.split('.');
        firstPart = +parts[0];
        firstPartString = `${getWords(firstPart)} rupees`;
        if(parts.length > 1) {
            // Set decimal part
            secondPart = +parts[1];
            secondPartString = `and ${getWords(secondPart)} paise`;
        }
        fullString = `${firstPartString} ${secondPartString}`;
        // console.log(`${inr} ${fullString}`);
        return fullString.trim();
    }
    catch (error) {
        console.log(error.message);
        return error.message;
    }

}

function removeLeadingZeros(inr) {
    // If octal, remove leading zeros
    let str = inr.toString();
    let str8 = inr.toString("8");
    if (+str === inr) return inr;
    return +str8;
}

// Testing
// inrInWords(process.argv[2]);


function getWords(num) {
    num = +num;
    let finalString = "";
    let crores = Math.floor(num / ONE_CRORE);
    let croresRemainder = num % ONE_CRORE;
    let croresInWords = "";

    let tenLakhs = Math.floor(croresRemainder / ONE_LAKH);
    let tenLakhsRemainder = croresRemainder % ONE_LAKH;
    let tenLakhsInWords = "";

    let tenThousands = Math.floor(tenLakhsRemainder / ONE_THOUSAND);
    let tenThousandsRemainder = tenLakhsRemainder % ONE_THOUSAND;
    let tenThousandsInWords = "";

    let hundreds = Math.floor(tenThousandsRemainder / ONE_HUNDRED);
    let hundredsRemainder = tenThousandsRemainder % ONE_HUNDRED;
    let hundersInWords = "";

    let tens = Math.floor(hundredsRemainder / TEN);
    let tensRemainder = hundredsRemainder % TEN;
    let tensInWords = "";
    let onesInWords = "";

    if (crores > 0) {
        croresInWords = `${getWords(crores)} crore${crores > 1 ? 's' : ''}`;
        finalString = `${croresInWords} `;
    }

    if (tenLakhs > 0) {
        // tenLakhsInWords = (tenLakhs < 20) ? LESS_THAN_TWENTY[tenLakhs] : TENTHS_LESS_THAN_HUNDRED[tenLakhs];
        tenLakhsInWords = `${getWords(tenLakhs)} lakhs`;
        finalString = `${finalString}${tenLakhsInWords} `;
    }

    if (tenThousands > 0) {
        // tenThousandsInWords = (tenThousands < 20) ? LESS_THAN_TWENTY[tenThousands] : TENTHS_LESS_THAN_HUNDRED[tenThousands];
        tenThousandsInWords = `${getWords(tenThousands)} thousand`;
        finalString = `${finalString}${tenThousandsInWords} `;
    }
    if (hundreds > 0) {
        hundersInWords = LESS_THAN_TWENTY[hundreds];
        hundersInWords = `${hundersInWords} hundred`;
        finalString = `${finalString}${hundersInWords} `;
    }

    if (hundredsRemainder > 0 && hundredsRemainder < 20) {
        // constuct string for less than 20 ( like thirteen, fifteen)
        tensInWords = LESS_THAN_TWENTY[hundredsRemainder];
        finalString = `${finalString}${tensInWords}`;
    }

    else {
        // If hundreds Remainder is 0, like 300.
        if(hundredsRemainder === 0) {
            finalString = finalString.trimEnd();
        }
        if (tens > 0) {
            tensInWords = TENTHS_LESS_THAN_HUNDRED[tens];
            finalString = `${finalString}${tensInWords} `;
        }

        if (tensRemainder > 0) {
            onesInWords = LESS_THAN_TWENTY[tensRemainder];
            finalString = `${finalString}${onesInWords}`;
        }
    }


    return finalString;
}

function isFinite(value) {
    return !(typeof value !== 'number' || value !== value || value === Infinity || value === -Infinity);
}

module.exports = inrInWords;