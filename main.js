function checkform() {
  var scores = 0;
  scores += gapFilling();
  scores += singleChoice();
  scores += multipleChoice();
  scores += trueAndFalse();
  scores += question();
  var goal = document.getElementById('score');
  goal.value = scores +'  分';
  return false;
}
