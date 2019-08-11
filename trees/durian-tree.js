
class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salaray = salary;
    this.boss = null;
    this.subordinates = [];
  }

  //add an employee to the subordinate array of its boss and set its boss.
  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  //function that returns the number of subordinates an employee has.
  get numberOfSubordinates() {
    return this.subordinates.length;
  }

  //function that returns the number of people in between an employee and the CEO.
  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople ++;
    }
  return numberOfPeople
  }

  //function that returns true if two employees share the same boss and false otherwise.
  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }
}

//5 nodes that represent 5 different employees
const ada = new Employee("Ada", "CEO", 30000000.00); //root node

//employees directly below ada
const craig = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela = new Employee("Angela", "VP Retail", 1000000);
const phil = new Employee("Phil", "VP Marketing", 1000000);

//To be a TREE => Link the nodes
ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

//console.log(ada);
//console.log(craig);

console.log(craig.boss);
console.log(craig.numberOfSubordinates);
console.log(craig.numberOfPeopleToCEO);

