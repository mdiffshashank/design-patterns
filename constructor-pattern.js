// Creating constructor
function Tree(name, height, scientificname) {
  this.name = name;
  this.height = height;
  this.scientificname = scientificname;
  // Declaring a method
  this.getData = function () {
    return this.name + " has a height of " + this.height;
  };
}
// Creating new instance
const Coconut = new Tree("coconut", "30m", "cocos nucifera");
console.log(Coconut.getData()); // coconut has a height of 30m

/**
 * Constructor pattern only create single type of object which is having all the
 * properties and methods attached whereas factory pattern creates group of object
 * such as in case of Employee factory example it creates two types of employee
 * one is tester and other is developer.
 */