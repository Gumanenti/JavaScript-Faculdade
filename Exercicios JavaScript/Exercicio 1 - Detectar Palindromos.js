const lista = ["radar", "reviver", "palindromo"];
function checkPalindrome(str) {     
  for(var i = 0; i < str.length / 2; i++) if (str[i] != str[str.length - i - 1]) return "";
  return str;
}

for(var i = 0; i < lista.length; i++){
  console.log(checkPalindrome(lista[i]));
}