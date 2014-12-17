function checkform() {
  var scores = 0;
  var contrastAnswer = new ContrastAnswer();
  scores += ContrastAnswer.gapFilling();
  scores += ContrastAnswer.singleChoice();
  scores += ContrastAnswer.multipleChoice();
  scores += ContrastAnswer.trueAndFalse();
  scores += ContrastAnswer.question();
  var goal = document.getElementById("score");
  goal.value = scores +'  分';
  return false;
}
