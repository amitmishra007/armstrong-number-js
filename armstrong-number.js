let inputNum = window.prompt(
  "Enter the Number to check if it's an Armstrong Number"
);
let total = 0;
for (let i = 0; i < inputNum.length; i++) {
  let expValue = Number(inputNum[i]) ** inputNum.length;
  total = total + expValue;
}
if (+inputNum === total) {
  alert(`${inputNum} is definitely an Armstrong Number`);
  console.log(`${inputNum} is definitely an Armstrong Number`);
} else {
  console.log(`${inputNum} isn't a Armstrong Number`);
  alert(`${inputNum} isn't an Armstrong Number`);
}
