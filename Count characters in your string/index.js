// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  // The function code should be here

  let object = {};
  if (string) {
    for (let i = 0; i < string.length; i++) {
      if (object[string[i]]) {
        object[string[i]] += 1;
      } else {
        object[string[i]] = 1;
      }
    }

    return object;
  }

  return {};
}

count("");
