function findSecondLowestAndGreatest(arr) {
    if (arr.length < 2) {
        return "Array should have at least two elements.";
    }

    var sortedArr = arr.sort(function(a, b) {
        return a - b;
    });

    var secondLowest = sortedArr[1];
    var secondGreatest = sortedArr[arr.length - 2];

    return [secondLowest, secondGreatest];
}

var sampleArray = [1, 2, 3, 4, 5];
var result = findSecondLowestAndGreatest(sampleArray);

console.log(result.join(','));
