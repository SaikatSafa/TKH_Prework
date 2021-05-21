var names_array = ["bob","jimmy","max b", "bernie", "jordan", "future hendrix"]

var even_array = split(names_array)

console.log(even_array)

function split(names_array) {
  var array_even = []
  var array_odd = []
  for (var i = 0; i < names_array.length; i++) {
    if (names_array[i].length % 2 == 0) {
      array_even.push(names_array[i])
    }
    else {
      array_odd.push(names_array[i])
    }
  }
  console.log(array_even)
  console.log(array_odd)

  for (var i = 0; i < array_even.length; i++) {
    array_even[i] = "b" + array_even[i].slice(1)
  }
  console.log(array_even)

  for (var i = 0; i < array_odd.length; i++) {
    array_odd[i] = array_odd[i].slice(0, array_odd[i].length-1) + "c"
  }
  console.log(array_odd)

  return array_even
}
