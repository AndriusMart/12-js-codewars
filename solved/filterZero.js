function moveZeros(arr) {
    return [...(arr.filter(n => n !== 0)),...(arr.filter(n => n === 0))];
}