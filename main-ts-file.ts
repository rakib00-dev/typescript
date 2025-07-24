const button = document.getElementById('button')! as HTMLButtonElement;
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

function Add(num1: number, num2: number) {
  return num1 + num2;
}

button.onclick = () => {
  const result = Add(+input1.value, +input2.value);

  console.log(result);
};
