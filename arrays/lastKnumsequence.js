function lastKNumbersSequence(n, k) {
  let arr = [1];
  for (let i = 1; i < n; i++) {
    let sumValue = arr.slice(-k);
    arr.push(sum(sumValue));
  }
  console.log(arr.join(' '));
}

function sum(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  }, 0);
}

lastKNumbersSequence(8, 2);
