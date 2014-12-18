function getUserAnswers() {
//  alert('ooo');
  var olay = [document.getElementById('1_1').value];
  olay.push = (document.getElementById('1_2_1').value,document.getElementById('1_2_2').value,document.getElementById('1_2_3').value);
  return olay;

}

function getAnswers() {
  return ['统一建模语言','封装性','继承性','多态性'];
}

function getScore() {
  return [5,5,5,5];
}
