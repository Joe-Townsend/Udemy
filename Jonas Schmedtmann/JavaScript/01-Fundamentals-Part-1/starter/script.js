/* Data Types: 
Number- Floating point numbers. used for decimals and integers
String- Sequence of Characters, used for text
Boolean- Logical type that can only be true or false, used for taking decisions
Undefined- Value taken by a variuable that is not yet defined
Null- Also means 'empty value'
Symbol (ES2015)- Value that is unique and cannot be changed [not useful]
BigInt (ES2020)- Larger integers than the number type can hold

let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is FUN!');

console.log(40 + 8 + 23 - 10);
console.log("Joe");
console.log("23");

let firstName = "Joe";
console.log(firstName);

let joe_josh = "JJ";
console.log(joe_josh);

let PI = 3.1415;

let myFirstJob = 'IT Support';
let myCurrentJob = 'Supervisor';

console.log(myFirstJob);
console.log(myCurrentJob);
console.log(PI);
console.log("First Job: " + myFirstJob + ", Current Job: " + myCurrentJob);*/

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Joe');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// console.log(age);
// age = 31;
// console.log(age);

// const birthYear = 1991;
// birthYear = 1990;

// var job = ';programmer';
// job = 'teacher';

// lastName= 'Townsend'
// console.log(lastName)

// const now = 2037;
// const ageJoe = now - 1991;
// const ageMohammed = now - 2018;
// console.log(ageJoe, ageMohammed);
// console.log(ageJoe * 2, ageMohammed / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Joe';
// const lastName = 'Townsend';
// console.log(firstName + ' ' + lastName);

// assignment operators
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x ++;
// x --;
// console.log(x);

// comparison operators
// console.log(ageJoe > ageMohammed); // <, >, >=, <=
// console.log(ageMohammed >= 18);

// const isFullAge = ageMohammed >=43
// console.log(now-1994 > now - 2018);

// const now = 2037;
// const ageJoe = now - 1991;
// const ageMohammed = now - 2018;
// console.log(now-1994 > now - 2018);

// console.log(25-10-5);

// let x, y;
// x = y = 25-10-5; // x = y = 10, x = 10
// console.log(x, y); // 10 10 

// const averageAge = (ageJoe + ageMohammed) / 2;
// console.log(ageJoe, ageMohammed, averageAge);

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);
// console.log(`Just a regular string...`);
// console.log('String with\n\
// multiple\n\
// lines');

// console.log(`string
// with
// multiple
// lines`);

// const age = 19;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log(`Sarah can start driving license no 🚗`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young, wait another ${yearsLeft} years bitch 😡`);
// }

// const birthYear = 2000;

// let century;
// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

//type conversion
// const inputYear ='1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

//type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('I am ' + '23' + ' years old');
// console.log('I am ' + String(23) + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2')

// let n = '1' + 1;
// n = n - 1;
// console.log()

// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0))
// console.log(Boolean('Joe'))

const money = 0;
if(money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job");
}