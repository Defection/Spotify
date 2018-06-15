function changePossibilities(amount, denomination) {
  var count = 0;
  function recurse(sum, ind = 0) {
    if (sum === amount) {
      count++;
      return;
    }
    if (sum < amount) {
      for (var i = ind; i < denomination.length; i++) {
        if (sum + denomination[i] <= amount) {
          recurse(sum + denomination[i], i);
        }
      }
    }
  }
  recurse(0);
  return count;
}
console.log(changePossibilities(4, [1, 2, 3]));
