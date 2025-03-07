interface User {
  name: string;
  age: number;
}

function greet(user: User) {
  console.log(`Hello ${user.name}, you are ${user.age} years old!`);
}

greet({ name: "John", age: 30 });
