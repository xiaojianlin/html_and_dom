function checkform() {
  var scores = 0;
  var userAnswers = getUserAnswers();
  var ansers = getAnswers();
  var score = getScore();
  //alert(anser);
  var contrastAnswer = new ContrastAnswer(userAnswers,ansers,score);
  scores += contrastAnswer.gapFilling();



  scores += ContrastAnswer.singleChoice();
  scores += ContrastAnswer.multipleChoice();
  scores += ContrastAnswer.trueAndFalse();
  scores += ContrastAnswer.question();
  var goal = document.getElementById('score');
  goal.value = scores +'  分';
  return false;
}
