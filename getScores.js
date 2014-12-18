function gapFilling() {
  var gapFillingscore = 0;
  gapFillingscore += contrastAnswer(document.getElementById('1_1').value,'统一建模语言',1);
  gapFillingscore += contrastAnswer(document.getElementById('1_2_1').value,'封装性',1);
  gapFillingscore += contrastAnswer(document.getElementById('1_2_2').value,'继承性',1);
  gapFillingscore += contrastAnswer(document.getElementById('1_2_3').value,'多态性',1);
  return gapFillingscore;
}


function singleChoice() {
  var singleChoicescore = 0;
  var answer_2_1 = document.getElementsByName('2_1');
  var answer_2_2 = document.getElementsByName('2_2');
  for(var i = 0; i < answer_2_1.length; i++) {
    if (answer_2_1[i].checked && answer_2_1[i].value === 'B' ) {
      singleChoicescore += 10;
    }
    if (answer_2_2[i].checked && answer_2_2[i].value === 'A' ) {
      singleChoicescore += 10;
    }
  }
  return singleChoicescore;
}


function multipleChoice() {
  var multipleChoicescore = 0;
  multipleChoicescore += getMultipleChoice('3_1','ABD',100);
  multipleChoicescore += getMultipleChoice('3_2','ABC',100);
  // var answer_3_1_A = '' ;
  // var answer_3_1_B = '';
  // var answer_3_1_C = '';
  // var answer_3_1_D = '';
  // if (document.getElementById('3_1_A').checked) {
  //   answer_3_1_A = 'A';
  // }
  // if (document.getElementById('3_1_B').checked) {
  //   answer_3_1_B = 'B';
  // }
  // if (document.getElementById('3_1_C').checked) {
  //   answer_3_1_C = 'C';
  // }
  // if (document.getElementById('3_1_D').checked) {
  //   answer_3_1_D = 'D';
  // }
  //
  // if (answer_3_1_A + answer_3_1_B + answer_3_1_C + answer_3_1_D === 'ABD') {
  //   multipleChoicescore += 100;
  // }
  //
  // var answer_3_2_A = '';
  // var answer_3_2_B = '';
  // var answer_3_2_C = '';
  // var answer_3_2_D = '';
  // if (document.getElementById('3_2_A').checked) {
  //   answer_3_2_A = 'A';
  // }
  // if (document.getElementById('3_2_B').checked) {
  //   answer_3_2_B = 'B';
  // }
  // if (document.getElementById('3_2_C').checked) {
  //   answer_3_2_C = 'C';
  // }
  // if (document.getElementById('3_2_D').checked) {
  //   answer_3_2_D = 'D';
  // }
  //
  // if (answer_3_2_A + answer_3_2_B + answer_3_2_C + answer_3_2_D === 'ABC') {
  //   multipleChoicescore += 100;
  // }
  return multipleChoicescore;

}


function getMultipleChoice(id,answer,score) {
  var getMultipleChoicescore = 0;
  var choice = document.getElementsByName(id);
  var string = '';
  for(var i = 0; i<choice.length; i++ ) {
    if(choice[i].checked) {
      string += choice[i].value;
    }
  }
  if(string === answer) {
    getMultipleChoicescore += score;
  }
  return getMultipleChoicescore;
}



function trueAndFalse() {
  var trueAndFalsescore = 0;
  var answer_4_1 = document.getElementById('4_1');
  var answer_4_2 = document.getElementById('4_2');
  if (answer_4_1.value === '错' ) {
    trueAndFalsescore += 1000;
  }
  if (answer_4_2.value === '对' ) {
    trueAndFalsescore += 1000;
  }
  return trueAndFalsescore;
}


function question() {
  var questionscore = 0;
  questionscore += contrastAnswer(document.getElementById('5').value,'模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式；可以是某种图形；或者是一种数学表达式。',10000);
  return questionscore;
}


function contrastAnswer(userAnswer,answer,score) {
  if (userAnswer === answer) {
    return score;
  }
  else {
    return 0;
  }
}
