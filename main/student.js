let Person = require('./person');
// Write your code here
function Student(name, age, klass){
  Person.apply(this, arguments);
  this.class = klass;
  this.introduce = function() {
    console.log("My name is " + this.name + ". I am " + this.age + " years old. I am a Student. I am at Class " + this.class + ".");
  }  
}
module.exports = Student;
