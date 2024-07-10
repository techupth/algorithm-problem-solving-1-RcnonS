function twoSum(numbers, target) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  const result = [];
  for (let i = 0; i <= numbers.length; i++) {
    for (let j = i + 1; j <= numbers.length; j++) {
      sum = numbers[i] + numbers[j];
      if (sum === target) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 23));
