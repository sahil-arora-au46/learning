function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
  greet("Maddison", new Date());
  // run tsc downleveling.ts
  // run tsc --target es6 downleveling.ts