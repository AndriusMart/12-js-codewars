console.clear();

function mergeArrays(arr1, arr2) {
    const arrayList = [...arr1,...arr2].sort((a, b) => a - b);
    return [...(new Set(arrayList))];
}

console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));