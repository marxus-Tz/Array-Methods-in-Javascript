// constructor function in javascript

function Student(firstname,LastName,email,AdmissionNo){
   this.firstname=firstname;
   this.email=email;
   this.LastName=LastName;
   this.AdmissionNo=AdmissionNo;
}

const Entry1=Student("mark","shija","plusmaxtechtz@gmail.com",1234);
console.log(Student(Entry1.email));



