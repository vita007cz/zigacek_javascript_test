// oblast definice funkcí

// 1) Funkce co vrací boolean hodnotu zda stringInput, obsahuje v sobě stringToFind; je caseSensitive (defaultní chování)
function contains(stringInput, stringToFind) {}

// 2) Funkce co vrací délku pole poskytnutého v arrayInput
function size(arrayInput) {}

// 3) Funkce co vrací opak poskytnutého boolean hodnoty v booleanInput
function negate(booleanInput) {}

// 4) Funkce co spojí (bez žádného přidaného znaku) dva textové řetězce string1 a string2 a vrátí je jako jeden string
// například pro "Hello", "World" bude výsledek "HelloWorld"
function join(string1, string2) {}

// 5) Funkce co vrací hodnotu z pole arrayInput na indexu indexInput (od 0)
// například pro ["apple", "banana", "kiwi", "orange", "strawberry"], 2 bude výsledek "kiwi"
function get(arrayInput, indexInput) {}

// oblast volání funkcí
const fruits = ["apple", "banana", "kiwi", "orange", "strawberry"];

// 1)
const result1 = contains("Hello World", "Hello");
console.log(result1);

// 2)
const result2 = size(fruits);
console.log(result2);

// 3)
const result3 = negate(true);
console.log(result3);

// 4)
const result4 = join("Hello", "World");
console.log(result4);

// 5)
const result5 = get(fruits, 2);
console.log(result5);

// do kódu níže nezasahujte

module.exports = {
  variant: "1A",
  contains,
  size,
  negate,
  join,
  get,
};
