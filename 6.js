let arr = [1, 1, 1, '1'];
let x = true;
for (let i = 0; i < arr.length; i++) {
  if (arr[0] !== arr[i])
    {x = false};
};
console.log(x)