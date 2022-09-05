function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create= (name, type) =>{
    switch (type) {
      case 1:
        return new Developer(name);
      case 2:
        return new Tester(name);
    }
  };
}
function say() {
  console.log(`Hi my name is ${this.name} and I'm a ${this.type}`);
}

const employees =[];
const employeeFactory = new EmployeeFactory();
employees.push(employeeFactory.create("Shashank",1));
employees.push(employeeFactory.create("Aditya",2));

employees.forEach(emp=>say.call(emp));
