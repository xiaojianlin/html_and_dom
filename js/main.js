function checkform() {
  // if (document.getElementById('classes').value === '' ||
  //     document.getElementById('student_number').value === '' ||
  //     document.getElementById('name').value === '') {
  //   alert('请填写班级、学号和姓名！');
  // }
  // else {
    document.getElementById("score").value = getAnswer();
  //}
  return false;
}

function getAnswer() {
  var score = 0;
  var answers = [
  new GapFilling('1_1','统一建模语言',1),
  new GapFilling('1_2_1','封装性',1),
  new GapFilling('1_2_2','继承性',1),
  new GapFilling('1_2_3','多态性',1),
  new SingleChoice('2_1','B',10),
  new SingleChoice('2_2','A',10),
  new MultipleChoice('3_1','ABD',100),
  new MultipleChoice('3_2','ABC',100),
  new TrueAndFalse('4_1','错',1000),
  new TrueAndFalse('4_2','对',1000),
  new Question('5_1','模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。',10000)
  ];
  for (i = 0; i < answers.length; i++) {
    score += answers[i].getScore();
  }
  score += '  分';
  return score;
}
