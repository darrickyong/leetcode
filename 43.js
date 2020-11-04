const multiply = (num1, num2) => {
  if (num1 === "0" || num2 === "0") return "0";
  if (num1 === "1" || num2 === "1") return num1 === "1" ? num2 : num1;

  num1 = num1.split("").reverse();
  num2 = num2.split("").reverse();

  let product = [];
  let hold = 0;
  let totalLength = num1.length + num2.length;

  for (let k = 0; k < totalLength; k++) {
    for (let i = 0; i < num1.length; i++) {
      let j = k - i;
      if (num2[j]) hold = hold + (num1[i] * num2[j]);
    }
    
    if (k === totalLength - 1 && hold === 0) {
      continue;
    }
    // console.log(hold);
    
    product[k] = hold % 10;
    console.log(hold);
    hold = Math.trunc(hold / 10);
    console.log(product);
  }

  return product.reverse().join("");
}

const num1 = "42";
const num2 = "56";
console.log(multiply(num1, num2));