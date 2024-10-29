// BigInt data type
var x = 45n;
console.log(typeof(x));

var y = 100000000000000479288n;
console.log(typeof(y));

var z = BigInt(100000000000000479288);
console.log(typeof(z));

const previouslyMaxSafeInteger = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// 9007199254740991n

const hugeString = BigInt("9007199254740991");
// 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// 9007199254740991n

const hugeOctal = BigInt("0o377777777777777777");
// 9007199254740991n

const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111",
);
console.log(hugeBin);
// 9007199254740991n


