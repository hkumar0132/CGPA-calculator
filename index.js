/*
>= 80 A : 10
>= 60 B : 8
>= 40 C : 6
>= 30 D : 4

all(marks1 * credits1)/all(credits)
*/

function isNumber(value) {
   return !isNaN(value);
}

function getEquivalentMarks(value) {

  if(value >= 80) {
    return 10;
  } else if(value >= 60) {
    return 8;
  } else if(value >= 40) {
    return 6;
  } else if(value >= 30) {
    return 4;
  }

  return 0;
}

function generateMarksAndCreditsArray() {

  const subjects = document.getElementsByClassName("block");

  let result = [];
  for(let index = 0; index < subjects.length; index++) {
    let marks = document.getElementById(`subject${index+1}`).value;
    let credits = document.getElementById(`subject${index+1}_credits`).value;

    if(isNumber(marks)) {
      marks = getEquivalentMarks(marks);
      if(marks === 0) {
        continue;
      }

      if(marks > 100 || marks < 0) {
        return -1;
      }

    } else {
      continue;
    }

    if(isNumber(credits)) {
      credits = parseInt(credits);

      if(credits < 2 || credits > 10) {
        return -1;
      }
    } else {
      continue;
    }

    result.push({
      'marks': marks,
      'credits': credits
    });
  }

  console.log('result', result);
  return result;
}

function getCGPA() {
  // console.log('GET CGPA');

  let marksAndCredits = generateMarksAndCreditsArray();

  let totalSum = 0, totalCredits = 0;
  for(let index = 0; index < marksAndCredits.length; index++) {
    totalSum += marksAndCredits[index]['marks'] * marksAndCredits[index]['credits'];
    totalCredits += marksAndCredits[index]['credits'];
  }

  return totalSum / totalCredits;
}

/*
function sendEmail(cgpa) {
  const tempParams = {
    from_name: 'CGPA calculator',
    to_name: document.getElementById("name").value,
    message: cgpa
  }

  emailjs.send('gmail', 'template_3xyjmgr', tempParams)
  .then(function(res) {
    console.log("success", res.status);
  });
}
*/

/*
document.getElementById("button").addEventListener("click", (e) => {
  e.preventDefault();
  console.log('add subject', e);
});
*/

document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit", e);
  let cgpa = getCGPA();
  console.log('cgpa', cgpa);

  if(cgpa >= 0 && cgpa <= 10) {
    document.getElementById("result").innerHTML = `<b>${cgpa}</b> CGPA`;
    // document.getElementById("send_email_div").innerHTML = `
    //   <input type="text" id="name" placeholder="Enter name">
    //   <input type="email" id="email" placeholder="Enter email">
    //   <button onclick="sendEmail(${cgpa})" id="send_email">Email me</button>
    // `;

  } else {
    document.getElementById("result").innerHTML = `<b>Not a valid combination of marks and credits</b>`;
  }
});