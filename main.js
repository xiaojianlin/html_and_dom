function checkform() {
  if (document.getElementById('classes').value === '' ||
      document.getElementById('student_number').value === '' ||
      document.getElementById('name').value === '') {
    alert('请填写班级、学号和名字！');
  }
  else {
    var scores = 0;
    scores += gapFilling();
    scores += singleChoice();
    scores += multipleChoice();
    scores += trueAndFalse();
    scores += question();
    var goal = document.getElementById('score');
    goal.value = scores +'  分';
  }
  return false;
}
