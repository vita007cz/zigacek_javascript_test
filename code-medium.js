// oblast definice funkcí

// 1) Funkce co vrací string, který odpovídá slovu (jsou oddělena mezerou) ze stringInput na pozici dané wordIndex (od 1), pokud index není vyplněn pracuje se s prvním slovem, vrácené slovo bude velkými písmeny, pokud slovo na dané pozici neexistuje, vrátí se prázdný string
// například pro "My cat is yellow?" a 3 bude výsledek "IS"
function capitalizeWord(stringInput, wordIndex) {
  const words = stringInput.split(' ');
  if (wordIndex < 1 || wordIndex > words.length) {
    return '';
  }
  return words[wordIndex - 1].toUpperCase();
}

// 2) Funkce co přijme testScore, a vrátí odpovídající známku podle následující tabulky:
// 0-50 -> F, 51-60 -> E, 61-70 -> D, 71-80 -> C, 81-90 -> B, 91-100 -> A, pokud je testScore mimo rozsah 0-100, nebo nevalidní hodnota funkce vrátí "INVALID SCORE"
// například pro 75 bude výsledek "C"
function transformScoreToGrade(testScore) {
  if (typeof testScore !== 'number' || testScore < 0 || testScore > 100) {
    return "INVALID SCORE";
  }
  if (testScore <= 50) {
    return "F";
  } else if (testScore <= 60) {
    return "E";
  } else if (testScore <= 70) {
    return "D";
  } else if (testScore <= 80) {
    return "C";
  } else if (testScore <= 90) {
    return "B";
  } else {
    return "A";
  }
}

// 3) Funkce na výpočet factorialu, pomocí cyklu, vstupem je factorialNumber, výstupem bude výsledek faktoriálu
// nevalidní vstupem je záporné číslo, nebo nečíslo, v takovém případě funkce vrátí undefined
// faktoriál je součin všech kladných celých čísel menších nebo rovných zadanému číslu; pozor faktoriál čísla 0 je 1
// například pro 5 bude výsledek 120; vzorec: 5! = 5 * 4 * 3 * 2 * 1 = 120
function factorial(factorialNumber) {
  if (typeof factorialNumber !== 'number' || factorialNumber < 0) {
    return undefined;
  }
  if (factorialNumber === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= factorialNumber; i++) {
    result *= i;
  }
  return result;
}

// oblast volání funkcí

// 1)
const result1 = capitalizeWord("My cat is yellow?", 3);
console.log(result1);

// 2)
const result2 = transformScoreToGrade(5);
console.log(result2);

// 3)
const result3 = factorial(5);
console.log(result3);

// do kódu níže nezasahujte

module.exports = {
  variant: "1A",
  capitalizeWord,
  transformScoreToGrade,
  factorial,
};
