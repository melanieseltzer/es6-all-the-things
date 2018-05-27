const data = [
  {
    category: 'New Variables',
    title: 'const',
    slug: 'const',
    info: 'Block-scoped. Cannot be re-assigned. Not immutable.',
    code: "const test = 'test';",
  },
  {
    category: 'New Variables',
    title: 'let',
    slug: 'let',
    info: 'Block-scoped. Can be re-assigned.',
    code: 'let i = 0;',
  },
  {
    category: 'Functions',
    title: 'Arrow Functions',
    slug: 'arrow-functions',
    info:
      "Cannot be named. If the callback is a one-liner (only returning something) you can do implicit return. Doesn't re-bind the value of this. If there's only one parameter the braces can be left off.",
    code:
      'const arrow = (dart, bow) => console.log("I\'m an implicit return!");\nconst arrow = dart => console.log("I have only one parameter");\nconst arrow = () => console.log("I don\'t have any parameters");',
  },
  {
    category: 'Functions',
    title: 'Default Function Arguments',
    slug: 'default-function-arguments',
    info: 'Sets the default argument if nothing is passed in.',
    code:
      'multiply = (a, b = 1) {\n return a * b;\n}\nconsole.log(multiply(5));\n// Expected output: 5\nconsole.log(multiply(5, 3));\n// Expected output: 15',
  },
  {
    category: 'Template Strings',
    title: 'Template Strings',
    slug: 'template-strings',
    info:
      'Interpolates variables inside of strings with backticks and brackets.',
    code:
      "const name = 'Melanie';\nconsole.log(`Hello, ${name}!`);\n// Expected output: Hello, Melanie!",
  },
  {
    category: 'Template Strings',
    title: 'Tagged Template Literals',
    slug: 'template-literals',
    info:
      'Tags allow you to parse template literals with a function. You’ll get access to all the string values as the first argument (in an array), and the interpolated expression(s) as the second argument. If the amount of expressions are unknown, ...rest can be used. The styled-components package utilizes TTL.',
    code:
      "const name = 'Melanie';\nconst messages = 5;\n\nhello = (strings, ...values) => {\n console.log('Strings:', strings);\n console.log('Values:' values);\n}\n\nconst welcome = hello`Hello, ${name}! You have ${messages} new messages.`\n\n// Strings: ['Hello, ', '! You have ', ' new messages.']\n// Values: ['Melanie', '5']",
  },
  {
    category: 'Array Methods',
    title: 'Array.from() and Array.of()',
    slug: 'array-from-of',
    info:
      'Array.from takes something that is array-ish and turns it into a true array. Array.of creates an array from every single argument passed to it.',
    code:
      "// Array.from\nconst navItems = document.querySelector('.nav li');\nconst navItemsArray = Array.from(navItems);\n\n// Array.of\nconst ages = Array.of(5, 15, 20, 3);",
  },
  {
    category: 'Array Methods',
    title: 'Array.find() and Array.findIndex()',
    slug: 'array-find-findindex',
    info:
      'Array.find returns the value of the first element that satisfies x condition. Array.findIndex returns the index of the first element that satisfies x condition.',
    code:
      'const ids = [5, 45, 30];\n\n// Array.find\nconst find = ids.find(x => x <= 10);\nconsole.log(find);\n// Expected output: 5\n\n// Array.findIndex\nconst find = ids.findIndex(x => x >= 40);\nconsole.log(find);\n// Expected output: 1',
  },
  {
    category: 'String Methods',
    title: 'startsWith(), endsWith(), includes(), repeat()',
    slug: 'string-methods',
    info:
      'Determines if a string starts with/ends with/includes specified character(s). Can skip characters if needed. Case sensitive. Also, repeat a string x number of times.',
    code:
      "const str = 'Coding is awesome';\n\nconsole.log(str.startsWith('C'));\n// Returns true\n\nconsole.log(str.endsWith('a', 6));\n// Returns false\n\nconsole.log(str.includes('awe'));\n// Returns true\n\nconst rock = '🚀';\nconsole.log(rock.repeat(10));\n// Expected output: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀",
  },
  {
    category: 'Destructuring',
    title: 'Destructuring Objects',
    slug: 'destructure-objects',
    info:
      'Allows properties of objects to be extracted into their own variables.',
    code:
      "const obj = { title: 'Dr', name: 'McDreamy'};\n\ngiveLove = ({ title, name }) => {\n console.log(`${title} ${name} is sexy`);\n}\ngiveLove(obj);\n\n// Expected output: Dr McDreamy is sexy",
  },
  {
    category: 'Destructuring',
    title: 'Destructuring Arrays',
    slug: 'destructuring-arrays',
    info: 'Allows array index values to be extracted into their own variables.',
    code:
      "const arr = ['Melanie', 1337];\nconst [name, coolness] = arr;\nconsole.log(`${name} is ${coolness} 😎`);\n// Expected output: Melanie is 1337 😎",
  },
  {
    category: 'Destructuring',
    title: 'Swapping Variables',
    slug: 'swapping-variables',
    info:
      'Creates an array of [x, x] and immediately destructure into the opposite.',
    code:
      'console.log(player, benched); // Steve, John\n[player, benched] = [benched, player];\nconsole.log(player, benched); // John, Steve',
  },
  {
    category: 'Iterables and Loops',
    title: 'for of',
    slug: 'for-of',
    info:
      'Can be used for any type of data except objects. Able to use break and continue.',
    code: 'for (const item of items) {\n console.log(item);\n}',
  },
  {
    category: 'Operators and Parameters',
    title: '...spread',
    slug: 'spread',
    info: 'Takes every single item from an iterable and expands it.',
    code:
      "const people = ['Sara'];\nconst cats = ['Callie'];\nconst myFamily = [...people, ...cats];\n// myFamily is ['Sara', 'Callie']",
  },
  {
    category: 'Operators and Parameters',
    title: '...rest',
    slug: 'rest',
    info:
      'Represents an indefinite number of arguments as an array. Used in functions and destructuring.',
    code:
      'multiply = (rate, ...numbers) => {\n return numbers.map(number => number * rate);\n}\nconsole.log(multiply(2, 10, 20, 30));\n// Expected output: 20, 40, 60',
  },
];

export default data;
