const lengthInput = document.getElementById("length");
const uppercaseCheck = document.getElementById("uppercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const resultInput = document.getElementById("result");
const copyBtn = document.getElementById("copy");

generateBtn.addEventListener("click", () => {
  const length = parseInt(lengthInput.value);
  const includeUppercase = uppercaseCheck.checked;
  const includeNumbers = numbersCheck.checked;
  const includeSymbols = symbolsCheck.checked;

  resultInput.value = generarPassword(length, includeUppercase, includeNumbers, includeSymbols);
});

copyBtn.addEventListener("click", () => {
  resultInput.select();
  document.execCommand("copy");
  copyBtn.textContent = "✅ Copiado";
  setTimeout(() => copyBtn.textContent = "📋 Copiar", 1500);
});

function generarPassword(length, uppercase, numbers, symbols) {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nums = "0123456789";
  const symb = "!@#$%^&*()_+-=[]{}|;:',.<>?";

  let caracteres = lower;
  if (uppercase) caracteres += upper;
  if (numbers) caracteres += nums;
  if (symbols) caracteres += symb;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    password += caracteres[randomIndex];
  }

  return password;
}
