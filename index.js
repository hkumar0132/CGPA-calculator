/*
>= 80 A : 10
>= 60 B : 8
>= 40 C : 6
>= 30 D : 4

all(marks1 * credits1)/all(credits)
*/

function getCGPA(marksAndCredits) {
  let totalSum = 0, totalCredits = 0;
  for(let index = 0; index < marksAndCredits; index++) {
    totalSum += marksAndCredits[0] * marksAndCredits[1];
    totalCredits += marksAndCredits[1];
  }

  return totalSum / totalCredits;
}

