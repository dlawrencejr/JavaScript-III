/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding-'this' defaults to the window/global 
* 2. Implicit Binding- used for objects and methods, helps locate what the keyword to the left of the function is invoking.
* 3. New Binding-setting "this" to what inputs we choose for a new call
* 4. Explicit Binding- used for functions to tell us where we want code to go to, explicitly telling what we are looking for the function to invoke
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const sayHello = function(hello){
    console.log(this);
    return hello;

};

sayHello('Hi');
// Principle 2

// code example for Implicit Binding

const me = {
   name: 'Dj',
   age: 28,
   callName: function(){
       console.log(this.name);
   }

};
me.callName();

// Principle 3

// code example for New Binding

const Parent = function ( name, age, gender){
    this.name= name;
    this.age= age;
    this.gender=gender;
}

const Dad = new Parent('Dj',28,'Male');

console.log(Dad);




// Principle 4

// code example for Explicit Binding
const callName = function(){
        console.log(this.name);
    };

const Dj = {
    name: 'Dj',
    age: 28,
 };
 callName.call(Dj);
 