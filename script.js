// TODO: create array of uppercase letters
const letters = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return caps.concat(caps.map(letter => letter.toLowerCase()));
  })();
// TODO: create array of lowercase letters

// TODO: create array of numbers 0-9

// TODO: create array of special characters

// TODO: ask user how long of a password is needed

// TODO: ask user uppercase letters

// TODO: ask user numbers

// TODO: ask user special characters

// TODO: state the perameters set by the user

// TODO: generate password using a random character from any of the arrays defined by the user

