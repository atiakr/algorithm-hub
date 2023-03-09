
// naive solution
// const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
//   let target = 0,
//     left = 0,
//     right = 0;
//   while (k > 0) {
//     if (arr1[left] < arr2[right]) {
//       target = arr1[left];
//       left++;
//     } else {
//       target = arr2[right];
//       right++;
//     }
//   k --;
//   }
//   return target;
// };


const getItemFromTwoSortedArrays = (arr1, arr2, k) =>{
    // TODO: 여기에 코드를 작성합니다.
    let indexOne = 0,
      indexTwo = 0,
      curNumber = 0;
    while(k > 0) {
      k -= 1;
      if (arr1[indexOne] < arr2[indexTwo]) {
        curNumber = arr1[indexOne];
        indexOne ++;
      } else {
        curNumber = arr2[indexTwo];
        indexTwo ++;
      }
    }
    return curNumber;
  };
  