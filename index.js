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

const inrInWords = function (inr) {
    // TODO: Check if inr is not null and valid
    // Validate inr
    // TODO: Split into two (rupess and paise)
    // TODO: Execute rupeesIntoWords for first part.
    // TODO: Execute paiseIntoWords for second part.
    // TODO: Concatenate both the parts.
    const value = Math.floor(+inr / 100);
    const rem = +inr % 100;
    console.log(`${value} - ${rem}`);
}

// Testing
inrInWords(667);

getWords(2409);

function getWords(num) {
    num = +num;
    let crores = Math.floor(num / ONE_CRORE);
    let croresRemainder = num % ONE_CRORE;

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

    if(tenLakhs > 0) {
        tenLakhsInWords = (tenLakhs < 20) ? LESS_THAN_TWENTY[tenLakhs] : TENTHS_LESS_THAN_HUNDRED[tenLakhs];
    }

    if(tenThousands > 0) {
        tenThousandsInWords = (tenThousands < 20) ? LESS_THAN_TWENTY[tenThousands] : TENTHS_LESS_THAN_HUNDRED[tenThousands];
        tenThousandsInWords = `${tenThousandsInWords} thousand`; 
    }

    if(hundreds > 0) {
        hundersInWords = LESS_THAN_TWENTY[hundreds];
        hundersInWords = `${hundersInWords} hundred and`;
    }

    if(tens > 0) {
        tensInWords = TENTHS_LESS_THAN_HUNDRED[tens];
    }

    if(tensRemainder > 0) {
        onesInWords = LESS_THAN_TWENTY[tensRemainder];
    }

    // console.log(`${crores} crores ${croresRemainder} lakhs`);
    // console.log(`${tenLakhs} lakhs ${tenLakhsRemainder} thousands`);
    // console.log(`${tenThousandsInWords} thousands ${tenThousandsRemainder} hundreds`);
    // console.log(`${hundersInWords} hundred ${hundredsRemainder} tens`);
    // console.log(`${tensInWords} ${onesInWords}`);
    console.log(`${crores} crores ${tenLakhsInWords} ${tenThousandsInWords} ${hundersInWords} ${tensInWords} ${onesInWords}`);

    if (Math.floor(num / ONE_CRORE) > 0) {
        console.log(``);
    }
}