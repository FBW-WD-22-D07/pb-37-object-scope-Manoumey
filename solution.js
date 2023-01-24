// # Gültigkeitsbereich (Scope)

// **Anweisungen**
// 1. Erstelle das folgende Objekt mit dem Namen `student`:
// ```javascript
// const student = {
//   firstName: "John",
//   lastName: "Smith",
//   class: 12 
// };
// ```
// * Erstelle innerhalb des Objekts `student` eine Methode namens `printDetails`, die Folgendes auf der Konsole ausgibt:
// ```javascript
// "John Smith is a student in class 12"
// ```


const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
  };
  



student.printDetails= function printDetails(){
    
console.log(`${this.firstName} ${this.lastName} is a student in class ${this.class}`);

}

student.printDetails();




  



// 2. Erstelle ein Objekt mit dem Namen `person` mit den Eigenschaften `firstName`, `lastName`, `age`, `job` und `city`. Füge eine Methode mit dem Namen `printDetails` hinzu, die diese Details ausgibt, wie in diesem Beispiel angegeben: "John Smith is a 41 year old engineer living in France".


const person ={

    firstName:"John",
    lastName : "Smith",
    age: 41,
    job: "engineer",
    city: "France",
}

person.printDetails = function printDetails(){

    console.log(`${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} living in ${this.city}`);

}
person.printDetails();

console.log('=============================================');

// ## Bonus

// 3. Füge eine Methode hinzu, um die Länge des Objekts `person` zu ermitteln.

  for (const key in person) {
 
    console.log( key );
   
    console.log( person[key] ); 
    console.log('-------------');
  }