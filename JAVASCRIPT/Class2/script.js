//! Operators
//? Arithmetic Operator
// a = 20
// b = 2
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

//? Assignment Operator
a = 50
// console.log(a += 10) // a = a+10
// console.log(a -= 10);
// console.log(a *= 10);
// console.log(a /= 10);
// console.log(a **= 10);
// console.log(a %= 10);

//? Comparision Operator
// let p = 10
// let q = 20
// let r = "10"
// console.log(p == q);
// console.log(p == r);
// console.log(p != q);
// console.log(p === q);
// console.log(p === r);
// consosle.log(p !== q);
// console.log(p < q);
// console.log(p > q);
// console.log(p > s);
// console.log(p >= s);
// console.log(p < s);
// console.log(p <= s);

//? Logical Operator
let x = true
let y = false
let z = true
//* AND
// console.log(x && y);
// console.log(x && z);
//*OR(Addition)
// console.log(x || y);
// console.log(x || y);
//*NOT(Reverse)
// console.log(!x);
// console.log(!y);

//? Unary Operator
a = 10
//* Increment
// console.log(++a);
// console.log(a++);
// console.log(a);

//* Decrement
// console.log(--a);
// console.log(a--);
// console.log(a);

//! Data Types
//? Primitive Type
//* Number
// let num1 = 10
// let num2 = 10.5
// let num3 = -50.3
// console.log(typeof num1);
// console.log(typeof num2);
// console.log(typeof num3);
//* String
let str1 = "Hello"
let str2 = "10"
let str3 = '283!52gdjl'
// console.log(typeof str1);
// console.log(typeof str2);
// console.log(typeof str3);
// console.log(str1[0]);

//* Boolean
let bool1 = true
let bool2 = false
// console.log(typeof bool1);

//* Undefined
let un
// console.log(typeof un);
// console.log(un);

//* null //Datatype is object
let n = null
// console.log(n);
// console.log(typeof n);

//* BigInt
let big = BigInt(12354679937468)
// console.log(typeof big);

//*Symbol
let symb = Symbol(1234)
// console.log(typeof symb);


//? Non-Primitive or Reference Type
//* Array
let marks = [90, 80, 70, 76, 98]
// console.log(marks);
// console.log(marks[1]);

//* Object
let obj = {
    name: "ABCD",
    age: 20,
    marks: marks,
    address:{
        city: "BBSR",
        state: "Odisha",
        pin: 751030
    }
}
// console.log(obj);
// console.log(obj.name);
// console.log(obj["age"]);
// console.log(obj.address.city);
// console.log(obj.marks[1]);

//? Insert a new Key
obj.cgpa = 9.0
// console.log(obj);
//?Update a Key
obj.age = 25
//  console.log(obj);
delete obj.address
// console.log(obj);


//* FUnction
function example(){
    console.log("This is a function");
}
example()
example()
example()
example()






















