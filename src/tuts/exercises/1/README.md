# Q1

```ts
/*
Intro:
    We are starting a small community of users. For performance
    reasons we have decided to store all users right in the code.
    This way we can provide our developers with more
    user-interaction opportunities. With user-related data, at least.
    All the GDPR-related issues we will solved some other day.
    This would be the base for our future experiments during
    these exercises.
Exercise:
    Given the data, define the interface "User" and use it accordingly.

*/
export type User = unknown;

export const users: unknown[] = [
  {
    name: "Abhjit Roy",
    age: 28,
    occupation: "Programmer",
  },
  {
    name: "Ramesh Kumar",
    age: 24,
    occupation: "Engineer",
  },
];

export function logPerson(user: unknown) {
  console.log(`- ${user.name}, ${user.age}`);
}

console.log("Users:");

users.forEach(logPerson);
```
