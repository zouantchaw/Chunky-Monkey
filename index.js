// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  // initialze two empty arrays, one of them will be return
  let temp = [];
  let result = [];

  // use for loop to iterate over arr until
  // a is equal to or more than the length of the arr
  for (let a = 0; a < arr.length; a++) {
    // push to temp if the remainder of a / size is not equal to size - 1
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(temp);
      result.push(temp)
      temp = [];
    }
  }
  if (temp.length !== 0) result.push(temp);
  return result
}


chunkArrayInGroups(["a", "b", "c", "d"], 2);