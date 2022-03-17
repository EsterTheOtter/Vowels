/*
var remove= 'Remove this string'
console.log(remove);

var arr1= remove.split('');
console.log(arr1)

var reg= /[aeiou]/gi;
Order of gi\/\ig doesn't matter, just declares global and case insensitive
var arr2= remove.match(reg)
console.log(arr2)

var noVowels= []
for (var i= 0; i<arr1.length; i++) {
  if(arr2.indexOf(arr1[i])) === -1) {
    noVowels.push(arr1[i])
  }
}
console.log(noVowels)
console.log(noVowels.join(""))
*/

//Create the var
const str = 'hello world';

const remVowels = str.replace(/[aeiou]/gi, '');

// Should remove voewls?
console.log(remVowels);

//Success!!