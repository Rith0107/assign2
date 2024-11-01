function reverseString() {
    const input = document.getElementById("stringInput").value;
    let reversed = "";
    for (let i = input.length - 1; i >= 0; i--) {
      reversed += input[i];
    }
    document.getElementById("reverseOutput").innerText = `Reversed String: ${reversed}`;
}

function checkPalindrome() {
  const input = document.getElementById("numberInput").value;
  let isPalindrome = true;
  for (let i = 0; i < input.length / 2; i++) {
    if (input[i] !== input[input.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
  document.getElementById("palindromeOutput").innerText = isPalindrome
    ? "It's a Palindrome!"
    : "Not a Palindrome.";
}
 
function parseToInt(input) {
  let result = 0;
  for (let i = 0; i < input.length; i++) {
      const digit = input[i];
      if (digit >= '0' && digit <= '9') {
          result = result * 10 + (digit - '0');
      } else {
          return NaN; 
      }
  }
  return result;
}
function calculateTip() {
  const subtotalInput = document.getElementById("subtotalInput").value;
  const tipPercentageInput = document.getElementById("tipPercentageInput").value;
  const subtotal = parseToInt(subtotalInput);
  const tipPercentage = parseToInt(tipPercentageInput);
  if (isNaN(subtotal) || isNaN(tipPercentage)) {
      document.getElementById("tipOutput").innerText = "Please enter valid numbers.";
      return;
  }
  const tipAmount = (subtotal * tipPercentage) / 100;
  const total = subtotal + tipAmount;
  document.getElementById("tipOutput").innerText = 
      `The tip amount is $${tipAmount.toFixed(2)} and total is $${total.toFixed(2)}`;
}
