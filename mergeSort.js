const mergeSort = (array) => {
  if (array.length === 1) return array;

  if (array.length > 1) {
    const half = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, half));
    const right = mergeSort(array.slice(half));

    if (right.length === 1) {
      if (left[0] === right[0]) return [left[0], right[0]];
      return (left[0] < right[0]) ? [left[0], right[0]] : [right[0], left[0]];
    }

    if (right.length > 1) {
      const tempArray = [];

      const mergeArrays = (arr1, arr2) => {
        if (arr1[0] < arr2[0] || arr1[0] === arr2[0]) {
          tempArray.push(arr1[0]);
          left.shift();
          mergeArrays(left, right);
        }

        if (arr1[0] > arr2[0]) {
          tempArray.push(arr2[0]);
          right.shift();
          mergeArrays(left, right);
        }

        if (arr1[0] === undefined) return [...tempArray, ...arr2];
        if (arr2[0] === undefined) return [...tempArray, ...arr1];
        return false;
      };

      return mergeArrays(left, right);
    }
  }
  return false;
};

const test = [4, 1, 56, 0, 5, 6, 6, 6, 7, 6, 78, 4, 5, 6, 78, 6, 7, 7, 8, 8, 8];

const logFunction = mergeSort(test);

console.log(logFunction);
