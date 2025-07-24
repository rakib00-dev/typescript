const button = document.getElementById('button');
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');

function Add(num1, num2) {
  return +num1 + +num2;
}

button.onclick = () => {
  const result = Add(input1.value, input2.value);

  console.log(result);
};
