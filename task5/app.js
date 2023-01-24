
//The first task
function wordsReverser(string){
  return string.split('').reverse().join('');
}
console.log(wordsReverser('Hey,Aidana! interesting homework)'));
//The second task
const averageCounter = [1, 2, 3, 4, 5,7,9,22,54,77,88,99,66,21];
const average = averageCounter.reduce((a, b) => a + b, 0) / averageCounter.length;
console.log(Math.ceil(average));
