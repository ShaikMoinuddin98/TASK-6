function sortAlphabetically(str) {
    return str.split('').sort().join('');
}

var exampleString = 'webmaster';
var sortedString = sortAlphabetically(exampleString);

console.log(sortedString); 
