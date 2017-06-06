// Write your code here
function Person(name, age){
  this.name = name;
  this.age = age;
  this.introduce = function() {
    console.log("My name is " + this.name + ". I am " + this.age + " years old.");
  }  
}  
module.exports = Person
