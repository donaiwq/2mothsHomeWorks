

//First Task
// var i = 0;
// while (i <= 20) {
//   if (i % 2 == 0) {
//     console.log(i)
//   }
//   i++
// }

//Second Task
var listOfNUmbers = [];
// var numEnter = 12
var _prompt = prompt("enter number")
do {

  listOfNUmbers.push(_prompt)
  _prompt = prompt("enter your holy numbre  pls");

} while (_prompt > 0) {
  var sum = listOfNUmbers.reduce(function (a, b) {
    return +a + +b;
  }, );
  alert(sum)
}



if (_prompt > 0) {
  _prompt
}

while (i > 0) {
  if(i<=0)
  console.log(numEnter);
  
}
const length = {}
var chinese = ['span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']
chinese.forEach(function (x) { length[x] = (length[x] || 0) + 1; });
console.log(length)