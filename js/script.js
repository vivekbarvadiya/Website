form1.email.focus();

function register(event) {
  let email = form1.email.value;
  let password = form1.password.value;
  let mobile = form1.mobile.value;
  let designation = form1.designation.value;
  let selectcourse = form1.selectcourse.preventDefault;
  event.preventDefault();

  if (email == "" || password == "" || mobile == "") {
    alert("all fiels are required");
    form1.email.focus();
  } else {
    alert("go ahead");
  }

  let span = document.getElementById("student-details");

  span.innerHTML = `Email : ${email} <br> Password : ${password} <br> mobile : ${mobile} <br> designation : ${designation} <br> Selected Course : ${selectcourse}`;
}

function calculate(event) {
  event.preventDefault();
  let math = mr1.Maths.value;
  let sci = mr1.Science.value;
  let eng = mr1.English.value;
  let total, percentage;
  total = parseInt(math) + parseInt(sci) + parseInt(eng);
  percentage = (total / 300) * 100;
  mr1.Total.value = total;
  mr1.Percentage.value = percentage + "%";
}

function showDiv(event) {
  let empname = emp.name.value;
  let salary = emp.salary.value;
  let performance = emp.performance.value;

  console.log(salary);

  let bonus = document.getElementById("display-bonus");
  let dsalary = document.getElementById("display-salary");

  if (performance == "A") {
    let bonusAmount = parseInt(salary) * 0.3;
    bonus.textContent = `Bonus is ${bonusAmount}`;
  } else if (performance == "B") {
    let bonusAmount = parseInt(salary) * 0.1;
    bonus.textContent = `Bonus is ${bonusAmount}`;
  } else {
    bonus.textContent = "No Bonus";
  }

  let totalsal = parseInt(salary) + parseInt(bonusAmount);

  dsalary.textContent = `${totalsal}`;
}

function quiz(event) {
  let ans1 = document.querySelector('input[name="q1"]:checked').value;
  let ans2 = document.querySelector('input[name="q2"]:checked').value;

  console.log(ans1);
  console.log(ans2);

  let score = 0;

  if (ans1 == "Static Page") {
    score += 2;
  }
  if (ans2 == "Dynamic Page") {
    score += 2;
  }

  alert(`${score}`);
}

function insruction(event) {
  console.log("object");
  window.open("instruction.html", "","width:400","height:400");
}
