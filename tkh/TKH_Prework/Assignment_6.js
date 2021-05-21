var array = [ "Retta", "Vern", "Marica", "Cyrus", "Linette", "Curt", "Nichole", "Jesica", "Wynell", "Michaele" ]

var answer = long(array)
console.log(answer)

function long(array) {
  var temp = ""
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > temp.length) {
      temp = array[i]
    }
    else {

    }
  }
  return temp;
}
