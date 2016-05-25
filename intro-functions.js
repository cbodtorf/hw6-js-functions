var myObject = {
  superPower: "som text",
  anotherProperty: "something",

};

/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them.
 * Use the if-then-else construct available in Javascript.
 */

function max(a, b){
    if (a > b) {
      return a;
    } else {
      return b;
    }
}

console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(max("aaa",0) === 0);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

function maxOfThree(a, b, c){
    if (a > b && a > c) {
      return a;
    } else if (b > a && b > c) {
      return b;
    } else {
      return c;
    }
}

console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(maxOfThree("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character,
 * (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(char){
    var vowel = ['a','i','e','o','u']
    if (char.length === 1) {
      if (vowel.indexOf(char.toLowerCase()) !== -1) {
        return true;
      } else {return false;}
    } else {
      return false;
    }
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */


 function rovarspraket(text){
   var vowel = ['a','i','e','o','u']
   var rov = ''
   if (typeof text === 'number') {
     text = text.toString();
     return rov = text;
   }
   for( i=0; i < text.length; i++) {
     var str = text[i];
     if(vowel.indexOf(str.toLowerCase()) !== -1) {
       rov = rov.concat(str);
     } else {
         rov = rov.concat(str + 'o' + str);
     }
   }
   return rov;
 }

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

 function reverse(str){
   var reverseWord = ''
   var arr = []
   for( i=0, len = str.length; i < len; i++) {
       arr.push(str[i]);
     }
     console.log(arr)
   for( i=0, len = arr.length; i < len; i++) {
     reverseWord = reverseWord.concat(arr.pop());
     console.log(reverseWord);
     }
     return reverseWord;
 }

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence){
    poop = sentence.split(' ')
    longWord = '';
    newWord = '';
    for (i=0; i < poop.length; i++) {
      newWord = poop[i];
      if (newWord.includes("'")) {
        newWord = newWord.replace("'","");
      }
      if (newWord.length > longWord.length ) {
        longWord = newWord;
      } else {console.log(longWord);}
    }
    return longWord;
}

console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")
