function validParentheses(parens) {
  let parensLeft = [];
  let parensRight = [];

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == ")") {
      parensRight.push(parens[i]);
    }
    if (parens[i] == "(") {
      parensLeft.push(parens[i]);
    }
  }
  if (
    parensLeft.length == parensRight.length &&
    parens[parens.length - 1] != "("
  ) {
    return true;
  }
  return false;
}

console.log(validParentheses("())(()"));
