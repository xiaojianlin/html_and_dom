function ContrastAnswer(userAnswer,answer,score) {
  this.userAnswer = userAnswer;
  this.answer = answer;
  this.score = score;
}


ContrastAnswer.prototype.gapFilling = function() {
  var gapFillingScore = 0;
  for (var i = 0; i < this.answer.length; i++) {
    if (this.userAnswer[i] === this.answer[i]) {
      gapFillingScore += this.score[i];
    }
  }
  // var score = 0;
  // var answer_1_1 = document.getElementById('1_1');
  // var answer_1_2_1 = document.getElementById('1_2_1');
  // var answer_1_2_2 = document.getElementById('1_2_2');
  // var answer_1_2_3 = document.getElementById('1_2_3');
  // if (answer_1_1.value === '统一建模语言') {
  //   score += 10;
  // }
  // if (answer_1_2_1.value === '封装性') {
  //   score += 10;
  // }
  // if (answer_1_2_2.value === '继承性') {
  //   score += 10;
  // }
  // if (answer_1_2_3.value === '多态性') {
  //   score += 10;
  // }
  return gapFillingScore;
};


ContrastAnswer.singleChoice = function() {
  var score = 0;
  var answer_2_1 = document.getElementsByName('2_1');
  var answer_2_2 = document.getElementsByName('2_2');
  for(var i = 0; i < answer_2_1.length; i++) {
    if (answer_2_1[i].checked && answer_2_1[i].value === 'B' ) {
      score += 15;
    }
    if (answer_2_2[i].checked && answer_2_2[i].value === 'A' ) {
      score += 15;
    }
  }
  return score;
};




ContrastAnswer.multipleChoice = function() {
  var score = 0;

  var answer_3_1_A = '' ;
  var answer_3_1_B = '';
  var answer_3_1_C = '';
  var answer_3_1_D = '';
  if (document.getElementById('3_1_A').checked) {
    answer_3_1_A = 'A';
  }
  if (document.getElementById('3_1_B').checked) {
    answer_3_1_B = 'B';
  }
  if (document.getElementById('3_1_C').checked) {
    answer_3_1_C = 'C';
  }
  if (document.getElementById('3_1_D').checked) {
    answer_3_1_D = 'D';
  }

  if (answer_3_1_A + answer_3_1_B + answer_3_1_C + answer_3_1_D === 'ABD') {
    score += 15;
  }


  var answer_3_2_A = '';
  var answer_3_2_B = '';
  var answer_3_2_C = '';
  var answer_3_2_D = '';
  if (document.getElementById('3_2_A').checked) {
    answer_3_2_A = 'A';
  }
  if (document.getElementById('3_2_B').checked) {
    answer_3_2_B = 'B';
  }
  if (document.getElementById('3_2_C').checked) {
    answer_3_2_C = 'C';
  }
  if (document.getElementById('3_2_D').checked) {
    answer_3_2_D = 'D';
  }

  if (answer_3_2_A + answer_3_2_B + answer_3_2_C + answer_3_2_D === 'ABC') {
    score += 15;
  }
  return score;
};


ContrastAnswer.trueAndFalse = function() {
  var score = 0;
  var answer_4_1 = document.getElementById('4_1');
  var answer_4_2 = document.getElementById('4_2');
  if (answer_4_1.value === '错' ) {
    score += 5;
  }
  if (answer_4_2.value === '对' ) {
    score += 5;
  }
  return score;
};


ContrastAnswer.question = function() {
  var score = 0;
  var answer_5 = document.getElementById('5');
  if (answer_5.value === '模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式；可以是某种图形；或者是一种数学表达式。' ) {
    score += 35;
  }
  return score;
};
