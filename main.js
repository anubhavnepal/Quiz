let quiz = {
  contents: [
    {
      question: "What is 2+2?",
      info: "1stQuestion",
      answer: [4, 6, 10],
      correct: 4,
    },
    {
      question: "What is 10/5?",
      info: "2ndQuestion",
      answer: [9, 5, 2],
      correct: 2,
    },
  ],
  render() {
    // var len = quiz.contents[0].answer;
    // console.log(len.length);
    let showContents = document.getElementById("container");
    let quest = document.createElement("div");
    quest.className = "deploy";
    for (let qes of this.contents) {
      let ans = document.createElement("div");
      ans.className = "question-container";
      ans.innerHTML = `
                        <div>
                          <h1>${qes.question}</h1>
                          <input type="radio" id= "right" name = "${qes.info}" value="${qes.answer[0]}"> ${qes.answer[0]}</input><br>
                          <input type="radio" name = "${qes.info}" value="${qes.answer[1]}"> ${qes.answer[1]}</input><br>
                          <input type="radio" name = "${qes.info}" value="${qes.answer[2]}"> ${qes.answer[2]}</input>                                             
                        </div>
      `;
      quest.appendChild(ans);
    }
    showContents.append(quest);
  },
};

quiz.render();

//From objects

function showresults() {
  let score = 0;
  let dis = document.getElementById("results");
  let total = quiz.contents;
  var b = document.getElementsByName("1stQuestion");
  var c = document.getElementsByName("2ndQuestion");

  if (b[0].value) {
    score++;
  }
  if (c[0].value) {
    score++;
  }
  dis.innerHTML = `${score} out of ${total.length}`;
}
//From Input id

/*
function showresults() {
  let score = 0;
  let dis = document.getElementById("results");
  let total = quiz.contents;

  let firstQues = quiz.contents[0].correct;
  console.log(firstQues);
  // let secondQues = quiz.contents[1].correct;
  // console.log(secondQues);

  if (document.getElementById("right").checked) {
    //alert("lol");
    score++;
    // console.log(score);
  }
  dis.innerHTML = `${score} out of ${total.length}`;
}
*/

/*
function showresults() {
let score = 0;
let display = document.getElementById("results");
 let total = quiz.contents;

//var b = document.getElementsByName("1stQuestion");
//var c = document.getElementsByName("2ndQuestion");

if (b[0].value) {
    score++;
  }
  if (c[0].value) {
    score++;
  }
  if (document.getElementById("right").checked) {
    alert("correct");
    score++;
    // console.log(score);
  }

  display.innerHTML = `Correct: ${score}`;
  // display.innerHTML = `${score} out of ${total.length}`;
}
*/
