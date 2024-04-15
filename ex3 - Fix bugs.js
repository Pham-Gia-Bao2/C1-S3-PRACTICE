// THE CONTEXT
// In the provided code, there's a function named findAverage that calculates the average of numbers in an array.
// The findAverage function takes an array of numbers as a parameter.

// THE PROBLEM
// There's a bug in the implementation of the findAverage function that causes it to produce incorrect results ( it displays NaN)

// YOUR JOB
// Nhiệm vụ của bạn là xác định và sửa lỗi trong chức năng FindaverAge để đảm bảo rằng nó tính toán chính xác mức trung bình của các số trong mảng.// TIPS
// You should use the DEBUGGER and execute step by step the function iterations.
function findAverage(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length-1; i++) {
    sum += numbers[i];

  }
  return sum / parseInt(numbers.length);
}

let scores = [9,3,4,23,43,242,342,34,23,423,2];
let averageScore = findAverage(scores);
console.log("Average score:", averageScore);
