"use strict";
function getArrayParams(...arr) {
  let min=arr[0], max=arr[0], avg=0, sum=arr[0];
  for(let i = 1; i < arr.length; i++){
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
    sum += arr[i];
    //console.log(`- ${arr[i]}`);
  }
  avg = +(sum/arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  const summ = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0);
  return summ;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length==0) return 0;
  return Math.max.apply(null, arr) - Math.min.apply(null, arr);
}

function differenceEvenOddWorker(...arr) {
  if (arr.length==0) return 0;
  let evenSum = 0, oddSum = 0;
  for(let i = 0; i < arr.length; i++){
    if (arr[i]%2===0) evenSum += arr[i];
    if (arr[i]%2!==0) oddSum += arr[i];
  }
  return evenSum - oddSum;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length==0) return 0;
  let evenSum = 0, counter = 0;
  for(let i = 0; i < arr.length; i++){
    if (arr[i]%2===0) {
      evenSum += arr[i];
      counter += 1;
    }
  }
  return evenSum / counter;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let result = 0;
  arrOfArr.forEach((record) => {
    result = func(...record);
    if ( result > maxWorkerResult) maxWorkerResult = result;
  });
return maxWorkerResult;
}
