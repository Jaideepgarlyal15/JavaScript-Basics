/* 1.this js file is for the concepts of console api */
console.log("Hello world", 4 + 6, "Another Log")
// alert("me");
/*  document.write("this is document wirte") */
/* for giving a warning we use console.warn */
console.warn("this is a warning")
/* for giving the error we use console.error */
console.error("this is an error")
/* console.clear is used to clear the console */
/* 2. JavaScript variables*/
/* what are variable?- containers to store data variables */
var number1 = 34;
var number2 = 56;
console.log(number1 + number2);
/* 3. Data types in javascript */
//numbers
var num1 = 455;
var num2 = 56.76

//string
var str1 = "this is the string";
var str2 = 'this is also a string';

//objects
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977

}
//booleans
var a = true;
var b = false;

//so either you can do the console.log here or in the server itself//
//so if here then 
console.log(marks)
//undifined variables
/* var und = undefined; */
//or
var und
console.log(und);
//null variables
var n = null;
console.log(n);
/* at a very high level there are two types of data types in javascript  */
//1. PRIMITIVE DATA TYPES: UNDEFINED, NULL, NUMBER, STRING, BOOLEAN, SYMBOL
// REFRENCE DATA TYPES:arrays and objects
var arr = [1, 2, 3, 4, 5]
console.log(arr[4])
var arr = ['bablu', 2, 3, 4, 5]
console.log(arr[0])
//operators in javascript
//airthematic operators
var a = 100;
var b = 10;
console.log("The value of a + b is ", a + b);
console.log("The value of a - b is ", a - b);
console.log("The value of a * b is ", a * b);
console.log("The value of a / b is ", a / b);

//Assignment Operators
var c = b;
c -= 2; //c = c - 2;
c *= 2;
c /= 2;

console.log(c);
//comparision operators
var x = 34;
var y = 56;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);

//logical operators
//logical and
console.log(true && true)
console.log(true && false)
console.log(false && false)
//logical or
console.log(true || true)
console.log(true || false)
console.log(false || false)
//logical not(true to false and false to true)
console.log(!false)
console.log(!true)
// 36 and 54 in line 70, 71 is operands and 36+54 is operators
// Function in javascript
// dry = do not repeat yourself 
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}

c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2);
//string is in black and blue is number

//conditional in js
var age = 24;
//only if statement
if (age > 18) {
    console.log('you can drink rasna water');
}
//if-else statement
/*  if (age > 18){
     console.log('you can drink rasna water');
 }
 else{
     console.log('you are a kid cannot drink rasna water');
} */

//if-else ladder
age = 22;
if (age > 2) {
    console.log("you are not a kid");
}
else if (age > 26) {
    console.log("bachhe nahi rahe");
}
else if (age > 22) {
    console.log("yes bachhe nahi rahe");
}
else {
    console.log("bachhe rahe");
}
console.log("end of ladder");



//loops
var arr = [1, 2, 3, 4, 5, 6, 7,];
console.log(arr);
//in this first the value of i is 0 then it goes and state that it is smaller than the length of the array which is 7 so hence it goes in console.log and then i++ happens where i value is 1 then the same condition that 1 is smaller than 7 yes then same ring follows//
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

arr.forEach(function (element) {
    console.log(element);

})
/* let j=0; //let scope is block level scope everytime use let rather than var//
const ac = 0;
a = a+1;
 */

//while loop check the condition
let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}


//do while loop
//this work without checking the condition hence it will directly print the consol.log(arr[j]); condition then check j <arr.length;
do {
    console.log(arr[j]);
    j++;

} while (j < arr.length);

//break and continue statement
//break statement in this the array value stops at 2.//
var arr = [1, 2, 3, 4, 5, 6, 7,];
/* console.log(arr); */

for (var i = 0; i < arr.length; i++) {
   if(i==2){
       break;
   }
   console.log(arr[i])
}

//continue

var arr = [1, 2, 3, 4, 5, 6, 7,];
/* console.log(arr); */

for (var i = 0; i < arr.length; i++) {
   if(i==2){
       continue;//in this i=2 got cancled 
   }
   console.log(arr[i])
}

let myArr = ["Fans","camera",null,true,34];
//ARRAY METHODS
console.log(myArr.length)
myArr.pop();//last element get's deleted
myArr.shift()// first element get out
myArr.push("harry");//will add the word to the new array
/* console.log(newLen);//will give the new length of the particular array */

console.log(myArr);

//strings methods in javascript:

let mylovelyString = "Harry is a good boy";
console.log(mylovelyString.length)
console.log(mylovelyString.indexOf("good"))//length till the end of "good"
//even can use lastindex for last good words 
console.log(mylovelyString.slice(1,3))//slicing in JS
d = mylovelyString.replace("Harry", "Rohan");//replacing harry with rohan
console.log(d, mylovelyString)


//js dates
let myDate = new Date();
console.log(myDate);
//methods in dates
console.log(myDate.getTime());//time in seconds
console.log(myDate.getFullYear());//year
console.log(myDate.getDay());//day
