function compareObjects(obj1, obj2) {
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (var key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

var obj1 = {a: 1, b: 2, c: 3};
var obj2 = {a: 1, b: 2, c: 3};
var obj3 = {a: 1, b: 2, c: 4};

var areEquivalent1and2 = compareObjects(obj1, obj2);
var areEquivalent1and3 = compareObjects(obj1, obj3);

console.log("obj1 and obj2 are equivalent:", areEquivalent1and2); 

console.log("obj1 and obj3 are equivalent:", areEquivalent1and3);