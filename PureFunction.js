const originalArray = [1,2,3];
const pushedArray = arrayPush(originalArray, 4)
const doublePushedArray = double(pushedArray)

const originalArrayPure = [1,2,3];
const pushedArrayPure = arrayPushPure(originalArrayPure, 4)
const doublePushedArrayPure = double(pushedArrayPure)

function arrayPush(arr, newValue){
    arr.push(newValue);
    return arr;
}

function arrayPushPure(arr, newValue){
    return [...arr, newValue];
}

function double(arr) {
    return arr.map(function(item) {return item*2 });
}
console.log('originalArray', originalArray)
console.log('doublePushedArray', doublePushedArray)

console.log('originalArrayPure', originalArrayPure)
console.log('doublePushedArrayPure', doublePushedArrayPure)

