/*
Have the function simpleAdding add up all the numbers from 1 to num. For
example: if the input is 4 then your program should return 10 because
1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number
from 1 to 1000.
*/

let simpleAdding = function (num) {

  let answer = 0
  
  for (let i = 0; i <= num; i++) {
      answer = answer + i
  }
  return answer
         
}

module.exports = simpleAdding
