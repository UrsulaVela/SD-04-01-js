const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!
  
  const arr1 = []

  for (let i = 30; i <= 39; i ++){
  arr1.push(i);
}

console.log(arr1);
console.log(arr1.length);

arr.push(arr1);

arr[3].splice(9,0,40);

arr[0].splice(0,1);

arr[2].reverse();

  // Type your code above this line!