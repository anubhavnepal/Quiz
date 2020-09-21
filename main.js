function check() {
  var count = 0;

  var q1 = document.quiz.firstQuestion.value;
  var q2 = document.quiz.secondQuestion.value;

  var result = document.querySelector("#result");
  var Quiz = document.querySelector("#Quiz");
  if (q1 == 0.5) {
    count++;
  }
  if (q2 == 20) {
    count++;
  }
  // document.write(c);
  Quiz.style.display = "none";
  result.textContent = `${count}`;
}
