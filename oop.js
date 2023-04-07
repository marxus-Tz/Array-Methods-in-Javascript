// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

const Employee={
   firstname:"john",
   lastname:"jayson",
   departmentNo:23,
   fullname: function(){
      return this.firstname + " " + this.lastname;
   }
}
console.log(Employee.fullname());


// // constructor function in javascript

function Student(firstname,LastName,email,AdmissionNo){
   this.fname=firstname,
   this.emailAddress=email,
   this.LName=LastName,
   this.AdmnNo=AdmissionNo
}

const Entry1= new Student("mark","shija","plusmaxtechtz@gmail.com",1234);
console.log(Entry1.emailAddress);





