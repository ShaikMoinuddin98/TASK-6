function capitalizeFirstLetter(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}


var exampleString = 'the quick brown fox';
var capitalizedString = capitalizeFirstLetter(exampleString);

console.log(capitalizedString); 
