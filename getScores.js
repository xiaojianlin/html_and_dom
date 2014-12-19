function gapFilling() {
  var score = 0;
  score += contrastAnswer(document.getElementById('1_1').value,'统一建模语言',1);
  score += contrastAnswer(document.getElementById('1_2_1').value,'封装性',1);
  score += contrastAnswer(document.getElementById('1_2_2').value,'继承性',1);
  score += contrastAnswer(document.getElementById('1_2_3').value,'多态性',1);
  return score;
}


function singleChoice() {
  var score = 0;
  var answer_2_1 = document.getElementsByName('2_1');
  var answer_2_2 = document.getElementsByName('2_2');
  for(var i = 0; i < answer_2_1.length; i++) {
    if (answer_2_1[i].checked ) {
      score += contrastAnswer(answer_2_1[i].value,'B',10);
    }
    if (answer_2_2[i].checked ) {
      score += contrastAnswer(answer_2_2[i].value,'A',10);
    }
  }
  return score;
}


function multipleChoice() {
  var score = 0;
  score += getMultipleChoice('3_1','ABD');
  score += getMultipleChoice('3_2','ABC');
  return score;
}


function getMultipleChoice(id,answer) {
  var getscore = 0;
  var choice = document.getElementsByName(id);
  var string = '';
  for(var i = 0; i<choice.length; i++ ) {
    if(choice[i].checked) {
      string += choice[i].value;
    }
  }
  getscore += contrastAnswer(string,answer,100);
  return getscore;
}



function trueAndFalse() {
  var score = 0;
  var answer_4_1 = document.getElementsByName('4_1');
  var answer_4_2 = document.getElementsByName('4_2');
  for(var i = 0; i < answer_4_1.length; i++) {
    if (answer_4_1[i].checked ) {
      score += contrastAnswer(answer_4_1[i].value,'错',1000);
    }
    if (answer_4_2[i].checked ) {
      score += contrastAnswer(answer_4_2[i].value,'对',1000);
    }
  }
  return score;
}


function question() {
  var score = 0;
  score += contrastAnswer(document.getElementById('5').value,'模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式；可以是某种图形；或者是一种数学表达式。',10000);
  return score;
}


function contrastAnswer(userAnswer,answer,userscore) {
  if (userAnswer === answer) {
    return userscore;
  }
  else {
    return 0;
  }
}
