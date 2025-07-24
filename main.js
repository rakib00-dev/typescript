var button = document.getElementById('button');
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
function Add(num1, num2) {
    return num1 + num2;
}
button.onclick = function () {
    var result = Add(+input1.value, +input2.value);
    console.log(result);
};
