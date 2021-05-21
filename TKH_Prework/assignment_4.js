over_under_array = [1,45,32,21,5,17,43,93]

var num = 25

for (var i = 0; i < over_under_array.length; i++) {
  if (over_under_array[i] < 25) {
    console.log(over_under_array[i] + " is under")
  }
  else {
    console.log(over_under_array[i] + " is over")
  }
}
